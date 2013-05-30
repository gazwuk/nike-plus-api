/**
 * Config
 */
var API_TOKEN = "INSERT_API_KEY";
var API_HOST  = "api.nike.com";
var API_BASE_PATH  = "/me/";
var API_QUERY_STRING = "?access_token=" + API_TOKEN;
var API_APPID = "fuelband";
var API_ACCEPT = "application/json";


var https = require('https');

/**
 * NikePlusAPI Constructor
 * @constructor
 */
function NikePlusAPI() {
  this.requestObj = {
    hostname: API_HOST,
    path: API_BASE_PATH + 'sport' + API_QUERY_STRING,
    headers: {
      appid: API_APPID,
      Accept: API_ACCEPT
    }
  };
}

/**
 * NikePlusAPI.makeRequest
 */
NikePlusAPI.prototype.makeRequest = function(request) {
  https.request(request, function(response) {
    response.on("data", function(data) {
      console.log(data.toString());
    });
  }).end();
};

/**
 * NikePlusAPI.getSportData
 */
NikePlusAPI.prototype.getSportData = function() {
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getActivities
 */
NikePlusAPI.prototype.getActivities = function() {
  this.requestObj.path = API_BASE_PATH + 'sport/activities' + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getActivity
 */
NikePlusAPI.prototype.getActivity = function(activityId) {
  this.requestObj.path = API_BASE_PATH + 'sport/activities/' + activityId + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getGPSData
 */
NikePlusAPI.prototype.getGPSData = function(activityId) {
  this.requestObj.path = API_BASE_PATH + 'sport/activities/' + activityId + '/gps' + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

var nikeplus = new NikePlusAPI();

nikeplus.getGPSData(16152883000);
