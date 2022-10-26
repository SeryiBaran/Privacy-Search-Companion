const toogleHiddenButton = document.getElementById("_toogleHiddenButton");

browser.tabs.query({ currentWindow: true }, function (tabs) {
	for (let tab in tabs) {
		browser.tabs.sendMessage(
			tabs[tab].id,
			{
				message: "sendResponse",
			},
			function (response) {
				window.localStorage.setItem("fullhidden", response);
				toogleHiddenButton.innerText =
					window.localStorage.getItem("fullhidden") == "true"
						? "Show"
						: "Hide";
			}
		);
	}
});
		// TODO:
		// Try to use browser.storage.local... 
toogleHiddenButton.onclick = () => {
	window.localStorage.getItem("fullhidden") == "true"
		? window.localStorage.setItem("fullhidden", false)
		: window.localStorage.setItem("fullhidden", true);

	toogleHiddenButton.innerText =
		window.localStorage.getItem("fullhidden") == "true"
			? "Show"
			: "Hide";
	browser.tabs.query({ currentWindow: true }, function (tabs) {
		for (let tab in tabs) {
			browser.tabs.sendMessage(
				tabs[tab].id,
				{
					message: "toogleHidden",
					text:
						window.localStorage.getItem("fullhidden") == "true"
							? "hide"
							: "show",
				},
				function (response) {}
			);
		}
	});
};
