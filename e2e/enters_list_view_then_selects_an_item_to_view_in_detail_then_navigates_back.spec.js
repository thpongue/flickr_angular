describe('the user enters the site via the list page, loads the data and selects the 5th item, views it in the detail page then goes back to the list page ', function() {
	it('should successfully navigate to from the list view to the detail view and back', function() {
		browser.get('http://localhost:8001');
		element(by.css('#loadDataButton')).click().then(function() {

			var original_media;
			var original_title;
			var original_author;
			var original_date_taken;
			var original_link;

			element(by.css('#items #item5 #media')).getText().then(function(text){
				original_media = text;
				element(by.css('#items #item5 #title')).getText().then(function(text){
					original_title = text;
					element(by.css('#items #item5 #author')).getText().then(function(text){
						original_author = text;
						element(by.css('#items #item5 #date_taken')).getText().then(function(text){
							original_date_taken = text;
							element(by.css('#items #item5 #link')).getText().then(function(text){
								original_link = text;
								element(by.css('#items #item5 #detailView')).click().then(function() {
									browser.getCurrentUrl().then(function (url) {
										expect(url).toContain('#/detail_view');
										element(by.css('#media')).getText().then(function(text) {
											expect(text).toEqual(original_media);			
										});
										element(by.css('#title')).getText().then(function(text) {
											expect(text).toEqual(original_title);			
										});
										element(by.css('#author')).getText().then(function(text) {
											expect(text).toEqual(original_author);			
										});
										element(by.css('#date_taken')).getText().then(function(text) {
											expect(text).toEqual(original_date_taken);			
										});
										element(by.css('#link')).getText().then(function(text) {
											expect(text).toEqual(original_link);			
										});
										element(by.css('#listView')).click().then(function() {
											browser.getCurrentUrl().then(function (url) {
												expect(url).toBe('http://localhost:8001/#/');
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});	
	});
});
