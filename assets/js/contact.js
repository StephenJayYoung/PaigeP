// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 36.105115,
			lng: -86.809535,
			scrollwheel: false
		});


		mapbg.addMarker({
			lat: 36.105115,
			lng: -86.809535,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Paige Prather, DDS</h3><p>2000 Richard Jones Road, Suite 109, Nashville, TN 37215 </p> <a href="https://www.google.com/maps/place/2000+Richard+Jones+Rd,+Nashville,+TN+37215/@36.1048635,-86.8116966,17z/data=!3m1!4b1!4m2!3m1!1s0x8864646e585937c3:0x6abbab9bb2c4d9b5" class="btn btn-sm c-btn-border-2x c-btn-red c-btn-uppercase c-btn-square c-btn-bold">Get Directions</a>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
});