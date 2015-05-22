basicCSV = require("basic-csv"),
	fs = require('fs'),
	nt = require("natural");

var dic = [
			"Homicídio", 
			"Homicídio Qualificado", 
			"Óbito", 
			"Comunicação de Homicídio",
			"Lesão Corporal Seguida de Morte",
			"Homicídio Doloso",
			"Latrocínio",
			];
var delimiter = ",";
var str = "";
basicCSV.readCSV("estado-teste.csv",{
	dropHeader:true
},
 function (error, rows){
  	for (i = 0; i < rows.length; i++) {
  		for (j = 0; j < rows[i].length; j++) {
	  		for(k = 0; k < dic.length; k++){
	  			if(nt.JaroWinklerDistance(dic[k], rows[i][30]) > 0.85){
	  				rows[i][30] = rows[i][30].replace(rows[i][30], dic[k]);
	  			}	
	  		}
	  			str += rows[i][j] + delimiter;
  		}
  		str += '\n';
  	} 
	fs.writeFile('helloworld.csv', str, function (err) {
  		if (err) return console.log(err);
	});
});