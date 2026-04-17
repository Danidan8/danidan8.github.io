//   mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWRhbjgiLCJhIjoiY21ueGo0OTdiMDJ4aDJ6cXAxOWw2Y3NsYiJ9.RodELdxBk_nzMtF1TLEF5w";
  mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWRhbjgiLCJhIjoiY21ueGhxd251MDJmbjJ6cXBlZW41enZ6OCJ9.q3-5xUitjgO_CTNNz7aV9g";

  window.map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-streets-v12",
    // style: "mapbox://styles/mapbox/light-v11",
    // center: [34.77585, 32.09647],
    center: [32.2843, 31.2565],
    zoom: 5
  });
  

// ❌ Disable all interactions (fix scroll issue)
  window.map.scrollZoom.disable();
  window.map.dragPan.disable();
  window.map.boxZoom.disable();
  window.map.doubleClickZoom.disable();
  window.map.touchZoomRotate.disable();


  const scroller = scrollama();

  function handleStepEnter(response) {
    const chapter = chapters.find(c => c.id === response.element.id);

    document.querySelectorAll(".step").forEach(step => {
      step.classList.remove("active");
    });

    response.element.classList.add("active");

    window.map.flyTo({
      ...chapter.location,
      duration: 5000
    });
  }

  function handleStepExit(response) {
    // Reset to Tel Aviv when scrolling above first section
    if (response.direction === "up" && response.index === 0) {
      window.map.flyTo({
        center: [34.77585, 32.09647],
        zoom: 15,
        pitch: 30,
        bearing: 0,
        duration: 2000
      });
    }
  }

  function init() {
    scroller
      .setup({
        step: ".step",
        offset: 0.5
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit);

    window.addEventListener("resize", scroller.resize);
  }

  window.map.on("load", init);

  // Load and display PortSaid.json
  fetch('Files/Map/PortSaid.json')
    .then(response => response.json())
    .then(data => {
      window.map.addSource('PortSaid', {
        type: 'geojson',
        data: data
      });

      window.map.addLayer({
        id: 'PortSaid-line',
        type: 'line',
        source: 'PortSaid',
        paint: {
          'line-color': '#ff0000',
          'line-width': 3
        }
      });
    })
    .catch(error => console.error('Error loading PortSaid.json:', error));

  // 3D Model Layer Configuration
// This uses the map created in script.js

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [32.33877, 31.24592];
const modelAltitude = 0;
const modelRotate = [0, 0, -0.5];

const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
    modelOrigin,
    modelAltitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
const modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    /* Since the 3D model is in real world meters, a scale transform needs to be
        * applied since the CustomLayerInterface expects units in MercatorCoordinates.
        */
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
};

const THREE = window.THREE;

// configuration of the custom layer for a 3D model per the CustomLayerInterface
const customLayer = {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d',
    onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new THREE.GLTFLoader();
        loader.load(
            'Files/3D/Fireboat.gltf',
            (gltf) => {
                this.scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error('Error loading 3D model:', error);
            }
        );
        this.map = map;

        // use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
            canvas: map.getCanvas(),
            context: gl,
            antialias: true
        });

        this.renderer.autoClear = false;
    },
    render: function (gl, matrix) {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(1, 0, 0),
            modelTransform.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(0, 1, 0),
            modelTransform.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(0, 0, 1),
            modelTransform.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
            .makeTranslation(
                modelTransform.translateX,
                modelTransform.translateY,
                modelTransform.translateZ
            )
            .scale(
                new THREE.Vector3(
                    modelTransform.scale,
                    -modelTransform.scale,
                    modelTransform.scale
                )
            )
            .multiply(rotationX)
            .multiply(rotationY)
            .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
    }
};

// Add the custom layer when the map is ready
window.map.on('style.load', () => {
    if (!window.map.getLayer('3d-model')) {
      window.map.addLayer(customLayer);
    }
  });