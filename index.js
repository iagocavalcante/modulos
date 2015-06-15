basicCSV = require("basic-csv"),
	fs = require('fs'),
	nt = require("natural");

var dic = [
			"Homicídio", "Homicídio Qualificado", "Óbito", 
			"Comunicação de Homicídio",	"Lesão Corporal Seguida de Morte", "Homicídio Doloso",
			"Latrocínio", "Homicídio Simples", "Belém",
			"Ananindeua", "Santarém", "Marabá",
			"Castanhal", "Parauapebas",	"Abaetetuba",
			"Cametá", "Marituba", "Bragança",
			"São Félix do Xingu", "Barcarena", "Tucuruí",
			"Altamira", "Paragominas", "Itaituba",
			"Breves", "Tailândia", "Redenção",
			"Moju", "Novo Repartimento", "Oriximiná",
			"Capanema", "Santa Isabel do Pará", "Santana do Araguaia",
			"Igarapé-Miri", "Tomé-Açu", "Breu Branco",
			"Viseu", "Benevides", "Portel",
			"Ipixuna do Pará", "Monte Alegre", "Dom Eliseu",
			"Jacundá", "São Miguel do Guamá", "Alenquer",
			"Acará", "Juruti", "Capitão Poço", "Ulianópolis",
			"Itupiranga", "Vigia", "Óbidos",
			"Rondon do Pará", "Conceição do AraguaiaRurópolis", "Uruará",
			"Pacajá", "Augusto Corrêa", "Baião",
			"Xinguara", "Jacareacanga", "Salinópolis",
			"Porto de Moz", "Muaná", "Goianésia do Pará",
			"Curuçá", "Igarapé-Açu", "Afuá",
			"Tucumã", "Almeirim", "Eldorado dos Carajás",
			"Canaã dos Carajás", "Irituia", "Curralinho",
			"Gurupá", "Concórdia do Pará", "São Domingos do Capim",
			"Oeiras do Pará", "Cachoeira do Piriá", "Ourilândia do Norte",
			"Medicilândia", "Prainha", "Tracuateua",
			"Santo Antônio do Tauá", "Aurora do Pará", "Mocajuba", 
			"Mãe do Rio", "Maracanã", "Ponta de Pedras",
			"Placas", "Bagre", "Bujaru",
			"Marapanim", "Anajás", "Limoeiro do Ajuru",
			"Melgaço", "Água Azul do Norte", "Garrafão do Norte",
			"Novo Progresso", "São Geraldo do Araguaia", "São Sebastião da Boa Vista",
			"Anapu", "São Domingos do Araguaia", "Soure", 
			"Santa Maria do Pará", "Chaves", "Cachoeira do Arari",
			"Salvaterra", "São João de Pirabas", "Nova Esperança do Piriá", 
			"Santa Luzia do Pará", "Floresta do Araguaia", "Trairão",
			"Curionópolis", "Rio Maria", "São Caetano de Odivelas", 
			"Santa Maria das Barreiras", "Santa Bárbara do Pará", "Ourém",
			"Terra Santa", "Belterra", "Bom Jesus do Tocantins",
			"Aveiro", "Nova Ipixuna", "São Francisco do Pará", 
			"Brasil Novo", "Bonito", "Nova Timboteua",
			"Vitória do Xingu", "São João do Araguaia", "Curuá",
			"Quatipuru", "Piçarra", "Senador José Porfírio",
			"Cumaru do Norte", "Colares", "Terra Alta",
			"Inhangapi", "Primavera", "Santa Cruz do Arari",
			"Magalhães Barata", "Peixe-Boi", "Faro",
			"Palestina do Pará", "Brejo Grande do Araguaia", "Abel Figueiredo",
			"Santarém Novo", "São João da Ponta", "Pau-d'Arco", 
			"Sapucaia", "Bannach"
			];
var delimiter = ",";
var str = "";
basicCSV.readCSV("estado-teste.csv",{
	dropHeader:true
},
 function (error, rows){
  	for (i = 0; i < rows.length; i++) {
  		for (j = 0; j < rows[i].length; j++) {
  			var indice = -1;
  			var similaridade = -1;
	  		for(k = 0; k < dic.length; k++){
	  			var temp = nt.JaroWinklerDistance(dic[k], rows[i][j]); 
	  			if( temp > similaridade ){
	  				indice = k;
	  				similaridade = temp;
	  				
	  			}	
	  		}
	  		if(similaridade > 0.90){
	  			
	  			rows[i][j] = rows[i][j].replace(rows[i][j], dic[indice]);
	  		}

	  			str += rows[i][j] + delimiter;
  		}
  		str += '\n';
  	} 
	fs.writeFile('corrigido.csv', str, function (err) {
  		if (err) return console.log(err);
	});
});