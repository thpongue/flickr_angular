function FlickrData() {
	this.SUCCESS = "SUCCESS";
	this.FAILURE = "FAILURE";
	this.PENDING = "PENDING";
	this.status = this.PENDING;
	this.value = null;
	this.setValue = setValue;
	
	//private
	function setValue(value) {
		this.value = value;
		this.status = value ? this.SUCCESS : this.FAILURE;
	}
}
