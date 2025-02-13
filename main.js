import { app, BrowserWindow } from "electron";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_WINDOW_STATE = {
  width: 1920,
  height: 1080,
};

const ICON_PATH = join(__dirname, "assets", "gemini.icns");

let win;

function createWindow() {
  win = new BrowserWindow({
    ...DEFAULT_WINDOW_STATE,
    icon: ICON_PATH,
    webPreferences: {
      nodeIntegration: false, // Set to false for security reasons
    },
  });

  win.loadURL("https://gemini.google.com/app");

  win.on("close", (event) => {
    event.preventDefault();
    win.hide();
  });
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (win === null) {
    createWindow();
  } else {
    win.show();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  app.quit();
});
