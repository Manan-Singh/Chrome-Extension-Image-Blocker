chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

		//$("*").css("background-color", "green");
        var images = document.getElementsByTagName("img");
		for(var i = 0; i < images.length; i++){
			images[i].src = "https://potatogamers.net/forums/data/MetaMirrorCache/static.fjcdn.com_pictures_Rare_pepe_thread_post_a_rare_of_favorite_pepes_any_and_228afe_5509854.jpg"; 
		}

		
    }
    }, 10);
});