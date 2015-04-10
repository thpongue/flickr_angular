describe('Flickr viewer', function() {
	describe('Item view spec', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001');
			element(by.css('#loadDataButton')).click();
		});

		it('should have a button to load the data', function() {
			expect(element(by.css('#loadDataButton')).isPresent()).toBe(true);
		});

		xit('should show the word \'loading\' whilst the data is loading', function() {
			
		});
		
		xit('should show the word \'failed\' if the data fails to load', function() {
			
		});
		
		describe('should list the data for 10 flickr posts', function() {
			var numberOfItems = 10;
			it('should show a photo url for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #media')).isPresent()).toBe(true);
				}
			});
			it('should show a post title for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #title')).isPresent()).toBe(true);
				}
			});
			it('should show a post author for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #author')).isPresent()).toBe(true);
				}
			});
			it('should show a publish date for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #date_taken')).isPresent()).toBe(true);
				}
			});
			it('should show a flickr link for each item', function() {
				for (i=1; i<=numberOfItems;i++) {
					expect(element(by.css('#items #item'+ i +' #link')).isPresent()).toBe(true);
				}
			});
		});
	});
});