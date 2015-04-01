describe('minimal list view spec', function() {
	describe('should call the flickr API and display at least one post', function() {
		beforeEach(function() {
			browser.get('http://localhost:8000');
		});
		it('should show a photo url', function() {
				expect(element(by.id('postList.post1.photoUrl')).isPresent()).toBe(true);
		});
		it('should show a post title', function() {
				expect(element(by.id('postList.post1.postTitle')).isPresent()).toBe(true);
		});
		it('should show a post author', function() {
				expect(element(by.id('postList.postAuthor')).isPresent()).toBe(true);
		});
		it('should show a publish date', function() {
				expect(element(by.id('postList.post1.publishDate')).isPresent()).toBe(true);
		});
		it('should show a flickr link', function() {
				expect(element(by.id('postList.post1.flickrLink')).isPresent()).toBe(true);
		});
	});
});
