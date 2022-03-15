const sendMessage = (whURl)	=> {
	new XMLhttpRequest().open("POST", whURL)
		.setRequestHeader("Content-type", "application/json")
		.send(JSON.stringify(...data));
}
