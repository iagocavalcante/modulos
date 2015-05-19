var natural = require('natural');
var t1 	= "Belém";
var t2	= "BELEM";


if(natural.JaroWinklerDistance(t1,t2) > 0.85){
	console.log(t2.replace(t2, t1));
}