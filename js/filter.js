function getShortMessages(messages) {
   return messages.map(function(object) {
     return object.message;
   }).filter(function(object) {
     return object.length < 50;
   })
}
module.exports = getShortMessages;
