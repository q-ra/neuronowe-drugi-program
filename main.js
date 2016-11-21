const electron = require('electron')
const {app, BrowserWindow} = electron

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1280, height: 720})

  mainWindow.loadURL(`file://${__dirname}/index.html`)

   mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
