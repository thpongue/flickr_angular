var mock = require('protractor-http-mock')

describe('Flickr viewer', function() {
	describe('List view spec', function() {
		afterEach(function(){
			mock.teardown();
		});

		beforeEach(function() {
			createMock();
			browser.get('http://localhost:8001');
			element(by.css('#loadDataButton')).click();
		});
		
		it('should have a button to load the data', function() {
			expect(element(by.css('#loadDataButton')).isPresent()).toBe(true);
		});

		it('should call the correct url', function(){
			expect(mock.requestsMade()).toEqual([
				{ url : 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK', method : 'JSONP' },
			]);
		});

		// from here downwards - these are broken until we can successfully mock the jsonp response

		describe('should list the data for 10 flickr posts', function() {
			var numberOfItems = 10;
			xit('should show a photo url for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #media')).isPresent()).toBe(true);
				}
			});
			xit('should show a post title for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #title')).isPresent()).toBe(true);
				}
			});
			xit('should show a post author for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #author')).isPresent()).toBe(true);
				}
			});
			xit('should show a publish date for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #date_taken')).isPresent()).toBe(true);
				}
			});
			xit('should show a flickr link for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #link')).isPresent()).toBe(true);
				}
			});
		});


		describe('should request the clicked url', function() {

			beforeEach(function() {
				browser.get('http://localhost:8001');
				element(by.css('#loadDataButton')).click();
			});

			var numberOfItems = 10;
			for (i=1; i<=numberOfItems;i++) {
				xit('should request the clicked url for item ' + i, function() {
					element(by.css('#items #item'+ i +' #detailView')).click().then(function() {
						browser.getCurrentUrl().then(function (url) {
							expect(url).toContain('#/detail_view');
						});
					});
				});
			}
		});

		xit('should show the word \'loading\' whilst the data is loading', function() {
			
		});
		
		xit('should show the word \'failed\' if the data fails to load', function() {
			
		});

		xit('should have a link to detail view for each item in the list view', function () {
			var numberOfItems = 10;
			for (i=1; i<=numberOfItems;i++) {
				expect(element(by.css('#items #item'+ i +' #detailView')).isPresent()).toBe(true);
			}
		});

		function createMock() {
			mock([
				{
					request: {
						path: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
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
		}
	});
});
