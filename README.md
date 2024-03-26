*REGISTRApp
*PUEDES BORRAR LA CARPETA node_modules y android PARA QUE EL PROYECTO QUEDE MAS LIVIANO
**en VSC-> Abrir Carpeta
**--> ABRIR EL TERMINAL Y EJECUTAR LAS INSTRUCCIONES: 
--> npm install
***PARA CORRER EL PROYECTO EN ANDROID
--> npm install @capacitor/android
--> npx cap add android
--> ionic capacitor sync android
*****Revisar errores de la consola, generalmente sugere instalar versiones específicas.
En caso que pida actualizar el core sin indicar versión: npm i @ionic-native/core
****ABRIR EL ANDROID STUDIO DESDE VSC
--> npx cap open  android 
***EN ANDROID STUDIO PODRÍA INDICAR QUE ACTUALICES EL GRADLE-->LE DAS 'UPDATE' Y 
SELECCIONAR LOS PASOS DE UPDATE QUE TE DA LA APLICACIÓN, CON ESO YA DEBE FUNCIONAR
