function sendMessage(whURL) {
	try {
		new XMLhttpRequest().open("POST", whURL)
			.setRequestHeader("Content-type", "application/json")
			.send(JSON.stringify(data));
	} catch (error) {
		throw new Error(error)
	}
}
