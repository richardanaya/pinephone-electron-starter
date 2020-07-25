const {app,BrowserWindow} = require('electron');
app.on('ready', () => {
const win = new BrowserWindow({
	x:0,
	y:0,
	frame: false,
	autoHideMenuBar: true});
win.maximize();
win.loadURL(`file://${__dirname}/index.html`);
})
