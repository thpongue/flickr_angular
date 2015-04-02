describe('minimal list view spec', function() {
	describe('should call the flickr API and display at least one post', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001');
		});
		it('should show a photo url', function() {
				expect(element(by.css('#photoUrl1')).isPresent()).toBe(true);
		});
		it('should show a post title', function() {
				expect(element(by.css('#postTitle1')).isPresent()).toBe(true);
		});
		it('should show a post author', function() {
				expect(element(by.css('#postAuthor1')).isPresent()).toBe(true);
		});
		it('should show a publish date', function() {
				expect(element(by.css('#publishDate1')).isPresent()).toBe(true);
		});
		it('should show a flickr link', function() {
				expect(element(by.css('#flickrLink1')).isPresent()).toBe(true);
		});
	});
});
