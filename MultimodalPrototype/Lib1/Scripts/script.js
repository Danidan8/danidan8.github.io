var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){
  
    $('.output1').html(data.dm.x).before("data.dm.x: ");
    $('.output2').html(data.do.alpha).before("data.do.alpha: ");

});
}).catch(function(e){
    console.log("Not Supported")
  });