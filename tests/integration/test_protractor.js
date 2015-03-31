describe('placeholder integration test', function() {
	it('should work if you start the server first', function() {
		browser.get('http://localhost:8000');
		expect(true).toBe(true);
	});
});
