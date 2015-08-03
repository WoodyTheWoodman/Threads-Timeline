var remote = require('remote');
var ipc = require('ipc');  // Lets you open new windows
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
	{
		label: 'Electron',
		submenu: [
		{
			label: "Prefs",
			click: function() {
				ipc.send('toggle-prefs');
			}
		}]
	}
]);
Menu.setApplicationMenu(menu);