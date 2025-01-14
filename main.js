const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process'); // Import the exec function

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
    },
  });

  exec('netstat -ano | findstr "4200"', (error, stdout, stderr) => {
    if (stdout.includes('LISTENING')) {
      win.loadURL('http://localhost:4200'); 
    } else {
      console.error("Angular development server is not running on port 4200.");
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});