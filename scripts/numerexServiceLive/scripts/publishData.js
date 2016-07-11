/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var log = require("log");
log.setLevel("INFO");
var payload = request.rawBody;
log.info(request.rawBody);
if(payload != null) {
	publish('pushNumerexData', [JSON.parse(payload)], false);
}
return payload;			