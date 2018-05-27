var data;

function preload(){
	data = loadJSON("nett.json");
}

function setup() {
	noCanvas();

	var nett = data.nett;

	function tilNode(inn) {
	  return("{\"id\": \"" + inn + "\", \"group\": 1}, ");
	}

	function tilLink(source, target) {
	  return("{\"source\": \"" + source + "\", \"target\": \"" + target + "\", \"value\": 1}, ");
	}

	var nodes = "";
  var links = "";
  for (var i = 0, len = nett.length; i < len; i++) {
    var sourceId = nett[i].id;
    //var felles = fellesRange[i];
    nodes = nodes + tilNode(sourceId);

    for (var j = 0, len = nett.length; j < len; j++) { // henter hver celle med felles >
      var felles = nett[j].felles;
      var targetId = nett[j].id;

      if(felles.indexOf(sourceId) !== -1) { // ser om fellesen inneholder aktuell targetid >
        links = links + tilLink(sourceId, targetId); // hvis ja > legger til link i links
      }
    }
  }

	//var ut = ("{\"nodes\" [" nodes"]," + "\"links\" [" links"]}")

	//createElement("p", "{ \"nodes\": [ " + nodes + "], \"links\": [" + links + "] }");
	//createElement("p", "{ \"nodes\": [" + "*nodes" + "], \"links\": [" + "*links" + "]}");
	createElement("p", links);


}
