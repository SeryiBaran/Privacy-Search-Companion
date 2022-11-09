const toogleHiddenButton = document.getElementById("_toogleHiddenButton");

let disabled = false;

(async () => {
	// await window.browser.storage.local.set({ fullhidden: false });
	const state = await browser.storage.local.get();
	if (state.disabled == undefined) {
		await syncStorage();
	} else {
		disabled = state.disabled;
	}

	syncButtonName();

	// TODO:
	// Try to use browser.storage.local...
	toogleHiddenButton.onclick = async () => {
		disabled = !disabled;

		await syncStorage();

		syncButtonName();

		browser.tabs.query({ currentWindow: true }, function (tabs) {
			for (let tab in tabs) {
				browser.tabs.sendMessage(
					tabs[tab].id,
					{
						message: "setDisabled",
						text: disabled,
					},
					function (response) {}
				);
			}
		});
	};
			browser.tabs.query({ currentWindow: true }, function (tabs) {
			for (let tab in tabs) {
				browser.tabs.sendMessage(
					tabs[tab].id,
					{
						message: "setDisabled",
						text: disabled,
					},
					function (response) {}
				);
			}
		});
})();

const syncStorage = async () => await browser.storage.local.set({ disabled });

function syncButtonName() {
	toogleHiddenButton.innerText = disabled ? "Enable" : "Disable";
}
