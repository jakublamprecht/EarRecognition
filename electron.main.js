const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development' ? true : false;
let win

function createWindow () {
  const entryPath = isDev ? 'http://localhost:8080/index.html' : `file://${path.join(__dirname, './dist/index.html')}`;
  
  win = new BrowserWindow({width: 1200, height: 800});
  win.loadURL(entryPath);
  win.webContents.openDevTools({ mode: 'undocked' });

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
