describe('Flickr viewer', function() {
	describe('Detail view spec', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001/#/detail_view/0');
		});

		it('should have a back button', function() {
			expect(element(by.css('#listView')).isPresent()).toBe(true);
		});
	
	});
});
