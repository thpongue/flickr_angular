describe('Flickr viewer', function() {
	describe('Detail view spec', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001/#/detail_view/0');
		});

		it('should have a back button', function() {
			expect(element(by.css('#listView')).isPresent()).toBe(true);
		});

		describe('should show the data for the selected Flickr post', function() {
			var numberOfItems = 10;
			it('should show a photo url for each item', function() {
				expect(element(by.css('#media')).isPresent()).toBe(true);
			});
			it('should show a post title for each item', function() {
				expect(element(by.css('#title')).isPresent()).toBe(true);
			});
			it('should show a post author for each item', function() {
				expect(element(by.css('#author')).isPresent()).toBe(true);
			});
			it('should show a publish date for each item', function() {
				expect(element(by.css('#date_taken')).isPresent()).toBe(true);
			});
			it('should show the tags', function() {
				//TODO 
			});
			it('should show the detail text', function() {
				//TODO 
			});
		});
	
	});
});
