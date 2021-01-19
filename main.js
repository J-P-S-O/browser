const {app, BrowserWindow} = require('electron');
let path = require("path")

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768, webPreferences: {
    nodeIntegration: true,
    webviewTag: true
    }}
  )
  mainWindow.loadURL(path.join("file://", __dirname,'./browser.html'));
  
});
