/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n   http: {\n    baseUrl: \"https://demo2016.scriptrapps.io\", //Scriptr api url\n  \tdataScript:\"numerexServiceLive/scripts/stubsData\" //Script responsible to fetch data from stubs service\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/TDA1QUMwQUI3Qw==\",\n    receive_channel: \"pushNumerexData\" //The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n  },\n  map: {\n  \tkey: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //GOOGLE API KEY (Browser key)\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    mode: [\"marker\",\"polyline\"], //[\"marker\", \"polyline\"],\n    strokeColor: '#FF0000',\n    strokeOpacity: 1.0,\n    strokeWeight: 1.5,\n    zoom: 4, \n    defaultCenter:  {'lat': 39.833333, 'lng':-98.583333},\n    zoomOnSelected: 14, //Zoom of the map when a truck is selected to show its route\n  \tgreenImage: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png'\n  },\n  dataHandler: {\n    transformFnc: \"transformToMapData\", //Define the transformation function you will use\n  },\n  useStub: false // set to true to use the scripts/stubsData script to generata random truck info and locations\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
   http: {\n\
    baseUrl: \"https://demo2016.scriptrapps.io\", //Scriptr api url\n\
  	dataScript:\"numerexServiceLive/scripts/stubsData\" //Script responsible to fetch data from stubs service\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/TDA1QUMwQUI3Qw==\",\n\
    receive_channel: \"pushNumerexData\" //The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n\
  },\n\
  map: {\n\
  	key: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //GOOGLE API KEY (Browser key)\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    mode: [\"marker\",\"polyline\"], //[\"marker\", \"polyline\"],\n\
    strokeColor: \'#FF0000\',\n\
    strokeOpacity: 1.0,\n\
    strokeWeight: 1.5,\n\
    zoom: 4, \n\
    defaultCenter:  {\'lat\': 39.833333, \'lng\':-98.583333},\n\
    zoomOnSelected: 14, //Zoom of the map when a truck is selected to show its route\n\
  	greenImage: \'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png\'\n\
  },\n\
  dataHandler: {\n\
    transformFnc: \"transformToMapData\", //Define the transformation function you will use\n\
  },\n\
  useStub: false // set to true to use the scripts/stubsData script to generata random truck info and locations\n\
}\n\
\n\
';  response.write(content);response.close();			