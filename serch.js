document.getElementById('serch').addEventListener("keypress", function() {
if(e.key==='Enter'){
	 var val=document.getElementById('serch').value.trim();
  var url="https://cse.google.com/cse.js?cx=007212209817860315724:ofzvrn2wwjn"+val
	fetch(url)
.then((response) => {
	for (var i = 0; i < response.items.length; i++) {
		var item = response.items[i];
		// in production code, item.htmlTitle should have the HTML entities escaped.
		document.getElementById("modal-content").innerHTML += "<br>" + item.htmlTitle;
}
});
}
});
