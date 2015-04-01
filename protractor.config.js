// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'tests/integration/**/*.js'
	],  
  capabilities: {
    browserName: 'chrome'
  }
}
