const {app, BrowserWindow} = require ('electron');

let appWindow;
function crearVentana(){
    appWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        minWidth:800,
        minHeight:600, 
        center: true,
        show: false,
        icon: 'icon.png'

    });

    // cuando la ventana es cerrada
    appWindow.on('closed', ()=>{
        appWindow = null;
    });

    // cargar html
    appWindow.loadFile('./index.html');

    // cuando la app esta lista mostrar ventana 
    appWindow.once('ready-to-show', ()=>{
        appWindow.show();
    });

}

app.on('ready', crearVentana);