var config = {};

config.mongoUri = 'mongodb://<dbuser>:<dbpass>@theserver.mongolab.com/<dbname>';
config.cookieMaxAge = 30 * 24 * 3600 * 1000;	// time in milliseconds

module.exports = config;
