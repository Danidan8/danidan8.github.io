//   mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWRhbjgiLCJhIjoiY21ueGo0OTdiMDJ4aDJ6cXAxOWw2Y3NsYiJ9.RodELdxBk_nzMtF1TLEF5w";
  mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWRhbjgiLCJhIjoiY21ueGhxd251MDJmbjJ6cXBlZW41enZ6OCJ9.q3-5xUitjgO_CTNNz7aV9g";

  window.map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
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
