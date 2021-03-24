/* roam/sr - Spaced Repetition in Roam Research
   Author: Adam Krivka
   v1.0.1
   https://github.com/aidam38/roamsr
 */

import { loadSettings, loadState } from "./core/sessions";
import { buttonClickHandler } from "./ui/srButton";
import { standbyState } from "./core/state";
import { addBasicStyles } from "./ui/styles";
import { addWidget } from "./ui/uiElements";

export const init = () => {
	var VERSION = "v1.0.1";

	if (!window.roamsr) window.roamsr = { state: {}, settings: {} };

	console.log("🗃️ Loading roam/sr " + VERSION + ".");

	standbyState();

	document.addEventListener("click", buttonClickHandler, false);

	loadSettings();
	addBasicStyles();
	loadState(-1).then(() => {
		addWidget();
	});

	console.log("🗃️ Successfully loaded roam/sr " + VERSION + ".");
};

init();
