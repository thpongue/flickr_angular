// conf.js
exports.config = {
 	baseUrl: 'http://localhost:8001/',
	specs: [
		'integration_tests/**/*.js'
	],  
  capabilities: {
    browserName: 'chrome'
  },
	onPrepare: function(){
		require('protractor-http-mock').config = {
			rootDirectory: __dirname,
			protractorConfig: 'protractor.config.js'
		}
	}
}
