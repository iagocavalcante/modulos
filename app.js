var fs = require('fs')
	,csv = require('fast-csv');
var stream = fs.createReadStream("teste.csv");

var csvStream = csv
    .fromStream(stream, {headers:true})
    .on("data", function(data){
         console.log(data);
    })
    .on("end", function(){
         console.log("done");
    });
 

