<script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};HandleGoogleApiLibrary()" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>
// Called when Google Javascript API Javascript is loaded
function HandleGoogleApiLibrary() {
	// Load "client" & "auth2" libraries
	gapi.load('client:auth2',  {
		callback: function() {
			// Initialize client & auth libraries
			gapi.client.init({
		    	apiKey: 'AIzaSyDGzEwWujLRtLV-a3idPlo0TZhAEHQT8M0',
		    	clientId: '787902294843-lghv98qka3s1o0u7s3g9j411eim2771a.apps.googleusercontent.com',
		    	scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
			}).then(
				function(success) {
			  		// Libraries are initialized successfully
		  			// You can now make API calls
				},
				function(error) {
					// Error occurred
					// console.log(error) to find the reason
			  	}
			);
		},
		onerror: function() {
			// Failed to load libraries
		}
	});
}
// Call login API on a click event
$("#google-login-button").on('click', function() {
	// API call for Google login
	gapi.auth2.getAuthInstance().signIn().then(
		function(success) {
			// Login API call is successful
		},
		function(error) {
			// Error occurred
			// console.log(error) to find the reason
		}
	);
});
