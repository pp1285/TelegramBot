var Parse = require('parse/node').Parse;
 Parse.initialize('EthanIsTheBestCookInTheWorld', null,'YouDebt');
 Parse.serverURL = 'http://ethankitchen.herokuapp.com/parse/';
 Parse.Cloud.useMasterKey();

 var subscribe = {

}

subscribe.saveUserSubscribe = function(save, topics, userID, callback) {
  console.log("saveUserSubscribe");
  var body = {
    topics: topics,
    userID: userID,
    save: save
  }

  Parse.Cloud.run('saveUserSubscribe',body).then(function(res) {
    console.log("call cloud");
    console.log(res);
    callback(res);
  });

}

module.exports = subscribe;