describe('the user enters the site via the list page, loads the data and selects the 5th item, views it in the detail page then goes back to the list page ', function() {
	it('should successfully navigate to from the list view to the detail view and back, detail view should contain additional tags and description', function() {
		browser.get('http://localhost:8001').then(function() {

			var original_media;
			var original_title;
			var original_author;
			var original_date_taken;
			var original_link;

			element(by.css('#item5 img#media')).getAttribute('src').then(function(text){
				original_media = text;
				element(by.css('#item5 #title')).getText().then(function(text){
					original_title = text;
					element(by.css('#item5 #author')).getText().then(function(text){
						original_author = text;
						element(by.css('#item5 #date_taken')).getText().then(function(text){
							original_date_taken = text;
							element(by.css('#item5 #flickr_link')).getAttribute('src').then(function(text){
								original_link = text;
								element(by.css('#item5 #title')).click().then(function() {
									browser.getCurrentUrl().then(function (url) {
										expect(url).toContain('#/detail_view');
										// these should match what we found on the list page
										element(by.css('img#media')).getAttribute('src').then(function(text) {
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
										element(by.css('#title')).getAttribute('src').then(function(text) {
											expect(text).toEqual(original_link);			
										});
										// these aren't on the list page but should be present
										element(by.css('#tags')).getText().then(function(text) {
											expect(text).not.toBe("");
										});
										element(by.css('#description')).getText().then(function(text) {
											expect(text).not.toBe("");
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
