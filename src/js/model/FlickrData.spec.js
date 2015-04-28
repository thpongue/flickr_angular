describe('list view controller test', function() {

	it('should default to no value', function() {
		expect(sut.value).toBe(null);
	});

	it('should persist the value', function() {
		sut.setValue("any primitive or object");
		expect(sut.value).toEqual("any primitive or object");
	});
	
	it('should default to a status of pending before value is set', function() {
		expect(sut.status).toEqual(sut.PENDING);
	});

	it('should have a status of success when a value is set', function() {
		sut.setValue("any primitive or object");
		expect(sut.status).toEqual(sut.SUCCESS);
	});

	it('should have a status of failure when a null is set', function() {
		sut.setValue(null);
		expect(sut.status).toEqual(sut.FAILURE);
	});

	
	// ----------------------------------
	// setup
	// ----------------------------------

	var sut = null;
	
	beforeEach(initSut);

	function initSut() {
		sut = new FlickrData();
	}
});
