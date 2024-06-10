// ==UserScript==
// @name         Chuusha Injector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Code injection library for the web.
// @author       RUUKU
// @match        https://example.com/
// @run-at       document-start
// @icon         none
// @grant        none

// ==/UserScript==

const GAMEDATA_FILE = ""
const MODIFIED_GAMEDATA_URL = ""

/* class GameHacks {
    put veriables and game handeling in here
} */

window.XMLHttpRequest = class extends window.XMLHttpRequest {
	open(method, url) {
        console.info(`[Chuusha][XMLHttpRequest] ${method} request to ${url}`)
        if (url === GAMEDATA_FILE) {
            console.info(`[Chuusha][XMLHttpRequest] Successfully forwarded ${method} request from ${url} to ${MODIFIED_GAMEDATA_URL}`)
            super.open(method, MODIFIED_GAMEDATA_URL)
        } else {
            super.open(...arguments)
        }
    }
}
