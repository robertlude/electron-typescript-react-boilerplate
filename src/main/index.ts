/// External Dependencies

import {
  app,
  BrowserWindow,
} from 'electron'

/// Module

const createWindow = () => {
  const win: BrowserWindow = new BrowserWindow({
    width:  800,
    height: 600,
  })

  win.loadFile('../renderer/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
