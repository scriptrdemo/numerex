/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Numerex Live Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://demo2016.scriptrapps.io/numerexServiceLive/css/style.css\" />\n    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/config.js\"></script>\n    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/wsClient.js\"></script>\n     <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/httpClient.js\"></script>\n     <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/dataHandler.js\"></script>\n    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/utils.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <div id=\"tracker\">\n      \n      <div class=\"stubs\" style=\"display: none\">Get Stubs data every <input type=\"number\" min=\"5\" max=\"200\" width=\"30px\" value=\"20\" id=\"stubsInterval\" onChange=\"setStubsDataInterval(this.value)\"/> seconds</div>\n      <div>Show route for Truck id <select id=\"trucks\" onchange=\"loadDeviceRoute(this.value)\"><option value=\"all\">All</option></div>\n    </div>\n    <script>\n      \n      var wsClient; \n      var httpClient; //for first load\n      var dataHandler;\n      var map;\n      var zoom;\n      var lat;\n      var lng;\n      var boundingBox;\n      $(window).load(function() { \n          wsClient = new $.WSClient({config: window.config.websocket});\n          httpClient = new $.HTTPClient({config: window.config.http});\n          dataHandler = new $.DataHandler({config: window.config.map});\n        \n          zoom = $.urlParam('zoom');\n          lat = $.urlParam('lat');\n          lng =$.urlParam('lng');\n        \n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&libraries=geometry&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      var selectOptions = [\"all\"];\n      var x = document.getElementById(\"trucks\");\n      \n      function loadDeviceRoute(deviceId) {\n        if(deviceId ==\"all\") {\n          map.setZoom(window.config.map.zoom)\n        }\n        renderMap();\n      }\n    \n      function addMapPoints(entries) {\n          if(entries instanceof Array) {\n            eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n            renderMap();\n            var trucks = Object.keys(dataHandler.allPolylines)\n            for(var i = 0; i < trucks.length; i++) {\n             if(selectOptions.indexOf(trucks[i]) == -1) {\n                 selectOptions.push(trucks[i]);\n                 var option = document.createElement(\"option\");\n      \t\t\t option.text = trucks[i];\n      \t\t\t x.add(option);\n             }\n           }\n         }\n      }\n      \n      var routes = {};\n      \n      var isCenterSet = false;\n      \n      function renderMap() {\n         $.each(dataHandler.allMarkers, function(key,marker){\n                if(x.value == \"all\" || x.value == key) {\n                   marker.setMap(map);\n                   if(x.value == key) {\n                     \tmap.setCenter(marker.getPosition());\n                   \t\tmap.setZoom(window.config.map.zoomOnSelected)\n                   } else {\n                   \t\t\n                   }\n                } else {\n                   marker.setMap(null);\n                }\n         });\n        \n         $.each(dataHandler.allPolylines, function(key,value){\n           var routePath = new google.maps.Polyline({\n              path: value,\n              geodesic: true,\n              strokeColor:  window.config.map.strokeColor,\n              strokeOpacity: window.config.map.strokeOpacity,\n              strokeWeight: window.config.map.strokeWeight\n            });\n            if(routes[key]) {\n                routes[key].setMap(null);\n            }\n           routes[key] = routePath;\n           \n           if(x.value == \"all\" || x.value == key) {\n              routes[key].setMap(map)\n            } else {\n              routes[key].setMap(null);\n            }\n        });\n      }\n\n      function showFailMessage(message) {\n          $(\"#map\").html(message);\n      }\n      \n      function initMap() {\n        wsClient.openConnection(addMapPoints, showFailMessage);\n        map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n          \tcenter: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        \n         if(window.config.useStub  && window.config.useStub == true) {\n            //Call stubs data for first load to broadcast some points to fill map\n         \thttpClient.callApi(httpClient.buildRequest(), addMapPoints, showFailMessage);\n             $(\".stubs\").show();\n            setStubsDataInterval(parseInt($(stubsInterval).val()));\n         } \n      }\n      \n      var stubsFetchInterval;\n      function setStubsDataInterval(value) {\n        if(stubsFetchInterval != null) {\n          \tclearInterval(myVar);\n        } \n        if(value > 0 ) {\n          setInterval(function(){ \n            httpClient.callApi(httpClient.buildRequest(), addMapPoints, showFailMessage);\n        \t}, value * 1000);\n        }\n      }\n   \n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Numerex Live Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
	<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<link rel=\"stylesheet\" href=\"https://demo2016.scriptrapps.io/numerexServiceLive/css/style.css\" />\n\
    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/config.js\"></script>\n\
    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/wsClient.js\"></script>\n\
     <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/httpClient.js\"></script>\n\
     <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/dataHandler.js\"></script>\n\
    <script src=\"https://demo2016.scriptrapps.io/numerexServiceLive/static/utils.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <div id=\"tracker\">\n\
      \n\
      <div class=\"stubs\" style=\"display: none\">Get Stubs data every <input type=\"number\" min=\"5\" max=\"200\" width=\"30px\" value=\"20\" id=\"stubsInterval\" onChange=\"setStubsDataInterval(this.value)\"/> seconds</div>\n\
      <div>Show route for Truck id <select id=\"trucks\" onchange=\"loadDeviceRoute(this.value)\"><option value=\"all\">All</option></div>\n\
    </div>\n\
    <script>\n\
      \n\
      var wsClient; \n\
      var httpClient; //for first load\n\
      var dataHandler;\n\
      var map;\n\
      var zoom;\n\
      var lat;\n\
      var lng;\n\
      var boundingBox;\n\
      $(window).load(function() { \n\
          wsClient = new $.WSClient({config: window.config.websocket});\n\
          httpClient = new $.HTTPClient({config: window.config.http});\n\
          dataHandler = new $.DataHandler({config: window.config.map});\n\
        \n\
          zoom = $.urlParam(\'zoom\');\n\
          lat = $.urlParam(\'lat\');\n\
          lng =$.urlParam(\'lng\');\n\
        \n\
          //Load google Maps API\n\
          var scr = document.createElement(\"script\");\n\
          scr.setAttribute(\"src\",\'https://maps.googleapis.com/maps/api/js?key=\'+config.map.key+\'&libraries=geometry&callback=initMap&output=\'+config.map.output);\n\
          document.head.appendChild(scr);\n\
      });\n\
      \n\
      var selectOptions = [\"all\"];\n\
      var x = document.getElementById(\"trucks\");\n\
      \n\
      function loadDeviceRoute(deviceId) {\n\
        if(deviceId ==\"all\") {\n\
          map.setZoom(window.config.map.zoom)\n\
        }\n\
        renderMap();\n\
      }\n\
    \n\
      function addMapPoints(entries) {\n\
          if(entries instanceof Array) {\n\
            eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n\
            renderMap();\n\
            var trucks = Object.keys(dataHandler.allPolylines)\n\
            for(var i = 0; i < trucks.length; i++) {\n\
             if(selectOptions.indexOf(trucks[i]) == -1) {\n\
                 selectOptions.push(trucks[i]);\n\
                 var option = document.createElement(\"option\");\n\
      			 option.text = trucks[i];\n\
      			 x.add(option);\n\
             }\n\
           }\n\
         }\n\
      }\n\
      \n\
      var routes = {};\n\
      \n\
      var isCenterSet = false;\n\
      \n\
      function renderMap() {\n\
         $.each(dataHandler.allMarkers, function(key,marker){\n\
                if(x.value == \"all\" || x.value == key) {\n\
                   marker.setMap(map);\n\
                   if(x.value == key) {\n\
                     	map.setCenter(marker.getPosition());\n\
                   		map.setZoom(window.config.map.zoomOnSelected)\n\
                   } else {\n\
                   		\n\
                   }\n\
                } else {\n\
                   marker.setMap(null);\n\
                }\n\
         });\n\
        \n\
         $.each(dataHandler.allPolylines, function(key,value){\n\
           var routePath = new google.maps.Polyline({\n\
              path: value,\n\
              geodesic: true,\n\
              strokeColor:  window.config.map.strokeColor,\n\
              strokeOpacity: window.config.map.strokeOpacity,\n\
              strokeWeight: window.config.map.strokeWeight\n\
            });\n\
            if(routes[key]) {\n\
                routes[key].setMap(null);\n\
            }\n\
           routes[key] = routePath;\n\
           \n\
           if(x.value == \"all\" || x.value == key) {\n\
              routes[key].setMap(map)\n\
            } else {\n\
              routes[key].setMap(null);\n\
            }\n\
        });\n\
      }\n\
\n\
      function showFailMessage(message) {\n\
          $(\"#map\").html(message);\n\
      }\n\
      \n\
      function initMap() {\n\
        wsClient.openConnection(addMapPoints, showFailMessage);\n\
        map = new google.maps.Map(document.getElementById(\'map\'), {\n\
        	zoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n\
          	center: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n\
          	mapTypeId: eval(window.config.map.type)\n\
      	});\n\
        \n\
         if(window.config.useStub  && window.config.useStub == true) {\n\
            //Call stubs data for first load to broadcast some points to fill map\n\
         	httpClient.callApi(httpClient.buildRequest(), addMapPoints, showFailMessage);\n\
             $(\".stubs\").show();\n\
            setStubsDataInterval(parseInt($(stubsInterval).val()));\n\
         } \n\
      }\n\
      \n\
      var stubsFetchInterval;\n\
      function setStubsDataInterval(value) {\n\
        if(stubsFetchInterval != null) {\n\
          	clearInterval(myVar);\n\
        } \n\
        if(value > 0 ) {\n\
          setInterval(function(){ \n\
            httpClient.callApi(httpClient.buildRequest(), addMapPoints, showFailMessage);\n\
        	}, value * 1000);\n\
        }\n\
      }\n\
   \n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			