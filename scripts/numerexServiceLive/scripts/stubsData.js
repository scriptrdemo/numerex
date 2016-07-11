/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var utils = require("./utils");

var trucks_info = [{"truck_id": 1122, "truck_name": "The Annihilator"},{"truck_id": 1133, "truck_name": "Asphalt Assault"},{"truck_id": 1144, "truck_name": "Bone Crusher"},{"truck_id": 1155, "truck_name": "Bloodhound"}];

//Get randomly 1 truck from the list
var truckInfo = trucks_info[Math.floor(Math.random() * trucks_info.length)];

//Get 1 point in 2 km radius
var pointData = utils.generateRandomPoint({'lat': 32.747942, 'lng':-117.154658}, 2000);

//Merge geolocation with truck info
for (var attrname in truckInfo) { 
  pointData[attrname] = truckInfo[attrname]; 
}

// Generates 1 points that is in a 1km radius from the given lat and lng point.
publish('pushNumerexData', [pointData], false);

return [pointData];			