describe('the user enters the site via the list page, loads the data, sees at least 10 entries and leaves', function() {
	beforeEach(function() {
		browser.get('http://localhost:8001');
		element(by.css('#loadDataButton')).click();
	});

	var numberOfItems = 10;
	it('should show a photo url, title, author, date and link for each item', function() {
		for (i=1; i<=numberOfItems;i++) {
			expect(element(by.css('#items #item'+ i +' #media')).isPresent()).toBe(true);
			expect(element(by.css('#items #item'+ i +' #title')).isPresent()).toBe(true);
			expect(element(by.css('#items #item'+ i +' #author')).isPresent()).toBe(true);
			expect(element(by.css('#items #item'+ i +' #date_taken')).isPresent()).toBe(true);
			expect(element(by.css('#items #item'+ i +' #link')).isPresent()).toBe(true);
		}
	});
})
