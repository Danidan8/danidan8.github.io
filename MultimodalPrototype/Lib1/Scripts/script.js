var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){
  
    $('.output').html(data.dm.x);
});
}).catch(function(e){
    console.log("Not Supported")
  });