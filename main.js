const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // mainWindow.loadURL
});
