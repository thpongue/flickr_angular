var mock = require('protractor-http-mock'), 
	get = require('./get'); 

describe('requests made', function(){
	
	afterEach(function(){
		mock.teardown();
	});


// 			TODO : need this to work
//			var resp = '';
//			resp.concat('{');
//			resp.concat('JSON_CALLBACK({');
//			resp.concat('"title": "title1",');
//			resp.concat('"link": "link1",');
//			resp.concat('"description": "description1",');
//			resp.concat('"modified": "modified1",');
//			resp.concat('"generator": "generator1",');
//			resp.concat('"items": [{');
//			resp.concat('"title": "title1",');
//			resp.concat('"link": "link1",');
//			resp.concat('"media": "media1",');
//			resp.concat('"date_taken": "date_taken1",');
//			resp.concat('"description": "description1",');
//			resp.concat('"published": "published1",');
//			resp.concat('"author": "author1",');
//			resp.concat('"author_id": "author_id1",');
//			resp.concat('"tags": "tags1"');
//			resp.concat('}]');
//			resp.concat('})');
//			resp.concat('}');
//
//			mock([{
//					request: {
//						path: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
//						method: 'JSONP'
//					},
//					response: resp
//			}]);

	beforeEach(function(){
		mock([
			{
				request: {
					path: '/test',
					method: 'JSONP'
				},
				response: {
					data: [
						{
							firstName: 'carlos',
							lastName: 'npm'
						},
						{
							firstName: 'angular',
							lastName: 'js'
						}
					]
				}
			}
		]);

		get();		
		element(by.css('#loadDataButton')).click();
	});

	it('can clear requests', function(){
		expect(mock.requestsMade()).toEqual([
			{ url : '/test', method : 'JSONP' },
		]);
//	browser.pause();
		expect(true).toBe(true);
	});
});
