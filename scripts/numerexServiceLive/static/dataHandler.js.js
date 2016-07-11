/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { //an IIFE so safely alias jQuery to $\n\t$.DataHandler = function (args) { \n          this.args = args;\n    };\n  \n    $.DataHandler.prototype = {\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:\n      [\n\t\t{\n\t\t\t\"latitude\": 32.7052777778,\n\t\t\t\"longitude\": -117.153055556,\n\t\t\t\"truck_name\": \",\n            \"truck_id\": 13\n\t\t},\n        {\n\t\t\t\"latitude\": 32.7052777778,\n\t\t\t\"longitude\": -117.153055556,\n\t\t\t\"truck_name\": \"\",\n            \"truck_id\": 12\n\t\t}\n        \n\t]\n      *SCRIPTR_COMMENT\n      transformToMapData: function(entries) {\n         var config = this.args.config;\n         var markersData = {};\n         var pathsData = {};\n         if(!this.allPolylines) this.allPolylines = {};\n         if(!this.allMarkers) this.allMarkers = {};\n         for (var i = 0; i < entries.length; i++) {\n          \tvar entry = entries[i];\n             markersData[entry.truck_id] = {\n              position: {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)}, \n              icon:  config.greenImage, \n              title: \"Description: \"+ entry.truck_name + \". truck id: \" + entry.truck_id,\n              zIndex: 4\n            };\n            \n            if(config.mode.indexOf(\"polyline\") != -1) {\n              \tpathsData[entry.truck_id] = {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)}\n            }\n           \n         }\n         var self = this;\n         $.each(markersData, function(key,markerData){\n            var marker = new google.maps.Marker(markerData);\n            if(self.allMarkers[key]) {\n                var deviceMarker = self.allMarkers[key]; //Get existing device markers\n                deviceMarker.setMap(null);\n            }\n            self.allMarkers[key] = marker\n        }); \n           \n        $.each(pathsData, function(key,value){\n          (self.allPolylines[key])? self.allPolylines[key].push(value) : (self.allPolylines[key]  = [value]);\n        });\n      }\n  };\n}(jQuery));"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { //an IIFE so safely alias jQuery to $\n\
	$.DataHandler = function (args) { \n\
          this.args = args;\n\
    };\n\
  \n\
    $.DataHandler.prototype = {\n\
      //Build your maker points, based on the data you are receiving.\n\
      /**In this example data has this format:\n\
      [\n\
		{\n\
			\"latitude\": 32.7052777778,\n\
			\"longitude\": -117.153055556,\n\
			\"truck_name\": \",\n\
            \"truck_id\": 13\n\
		},\n\
        {\n\
			\"latitude\": 32.7052777778,\n\
			\"longitude\": -117.153055556,\n\
			\"truck_name\": \"\",\n\
            \"truck_id\": 12\n\
		}\n\
        \n\
	]\n\
      **/\n\
      transformToMapData: function(entries) {\n\
         var config = this.args.config;\n\
         var markersData = {};\n\
         var pathsData = {};\n\
         if(!this.allPolylines) this.allPolylines = {};\n\
         if(!this.allMarkers) this.allMarkers = {};\n\
         for (var i = 0; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
             markersData[entry.truck_id] = {\n\
              position: {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)}, \n\
              icon:  config.greenImage, \n\
              title: \"Description: \"+ entry.truck_name + \". truck id: \" + entry.truck_id,\n\
              zIndex: 4\n\
            };\n\
            \n\
            if(config.mode.indexOf(\"polyline\") != -1) {\n\
              	pathsData[entry.truck_id] = {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)}\n\
            }\n\
           \n\
         }\n\
         var self = this;\n\
         $.each(markersData, function(key,markerData){\n\
            var marker = new google.maps.Marker(markerData);\n\
            if(self.allMarkers[key]) {\n\
                var deviceMarker = self.allMarkers[key]; //Get existing device markers\n\
                deviceMarker.setMap(null);\n\
            }\n\
            self.allMarkers[key] = marker\n\
        }); \n\
           \n\
        $.each(pathsData, function(key,value){\n\
          (self.allPolylines[key])? self.allPolylines[key].push(value) : (self.allPolylines[key]  = [value]);\n\
        });\n\
      }\n\
  };\n\
}(jQuery));';  response.write(content);response.close();			