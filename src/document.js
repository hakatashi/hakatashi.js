// not activate in node
if (typeof document !== 'undefined') {
	// Parse URI query and get value from name.
	// http://stackoverflow.com/questions/6466135/
	document.getParameterByName = function (name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};
}
