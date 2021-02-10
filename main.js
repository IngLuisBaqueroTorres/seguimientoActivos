const electron = require('electron')
const {app,BrowserWindow,Menu} = electron
Menu.setApplicationMenu(false)
const path = require('path')
const url = require('url')
const play = require('audio-play')


let win
 electron.app.on('browser-window-created',function(e,window) {
      //window.setMenu(null);
  });

function createWindow(){
	win = new BrowserWindow ({width: 1000, height:650, icon:__dirname+'/RFID.ico', resizable:false })
	win.setMenu(null);
	win.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
}
exports.openWindow = (arg) => {
	if(arg==1){
			let newWin = new BrowserWindow({width: 350, height: 150,icon:__dirname+'/RFID.ico', resizable:false })
			newWin.setMenu(null);
			newWin.loadURL(url.format({
				pathname: path.join(__dirname,'ventana1.html'),
				protocol: 'file',
				slashes: true
			}))
		}
	if(arg==2){
			let newWin = new BrowserWindow({width: 525, height: 550,icon:__dirname+'/RFID.ico', resizable:false })
			newWin.setMenu(null);
			newWin.loadURL(url.format({
				pathname: path.join(__dirname,'ventana2.html'),
				protocol: 'file',
				slashes: true
			}))
		}
	if(arg==3){
			let newWin = new BrowserWindow({width: 280, height: 120,icon:__dirname+'/RFID.ico', resizable:false })
			newWin.setMenu(null);
			newWin.loadURL(url.format({
				pathname: path.join(__dirname,'permisos.html'),
				protocol: 'file',
				slashes: true
			}))
		}
	if(arg==4){
			let newWin = new BrowserWindow({width: 300, height: 145,icon:__dirname+'/RFID.ico', resizable:false })
			newWin.setMenu(null);
			newWin.loadURL(url.format({
				pathname: path.join(__dirname,'ventana3.html'),
				protocol: 'file',
				slashes: true
			}))
		}
	if(arg==5){
			let newWin = new BrowserWindow({width: 1320, height: 750,icon:__dirname+'/RFID.ico', resizable:false })
			newWin.setMenu(null);
			newWin.loadURL(url.format({
				pathname: path.join(__dirname,'manual.html'),
				protocol: 'file',
				slashes: true
			}))
		}
	
}
exports.openWindow1 = () => {
	let newWin = new BrowserWindow({width: 4000, height: 150,icon:__dirname+'/RFID.ico', resizable:false })
	newWin.loadURL(url.format({
		pathname: path.join(__dirname,'ventana2.html'),
		protocol: 'file',
		slashes: true
	}))
}
 function minimize(){ 
    var window = remote.getCurrentWindow(); 
    window.minimize(); 
    } 

    function close(){ 
    var window = remote.getCurrentWindow(); 
    window.close(); 
    } 

app.on('ready',createWindow)

