fs = require('fs');
var watch=require('node-watch');

fs.watchFile('d.txt', function (curr, prev) {
  console.log('changes detected');
  //console.log("curr", curr);
  //console.log("prev", prev);
  var prevsize = prev.size;
  var currsize = curr.size;
  //console.log("prevsize", prevsize);
  //console.log("currsize", currsize);
  var diff = currsize - prevsize;
  //console.log("Diiffrenece", diff);	

  fs.open("./d.txt","r",function(error,fd)
  {
    var buffer = new Buffer.alloc(diff);
    fs.read(fd,buffer,0,diff,prevsize,function(error,byteread,buffer)
    {
      var data = buffer.toString("ascii",0,diff);
      if(error)
      {
        return console.log(error);
      }
      console.log(data);

    });
  });

});


