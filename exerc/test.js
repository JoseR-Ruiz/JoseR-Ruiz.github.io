/*console.log("the master's tools will never dismantle the masters's house");

let p=new Promise(function(resuelto, rechazo){
    let test=10;
    if(test==10){
        resuelto("Freedom is a constant struggle.");
    } else {
        rechazo("Being oppressed means the absence of choices");
    }

});

console.log(p);

p.then(function(mensaje) {
  console.log("Resuelto:", mensaje);
}).catch(function(error) {
  console.log("Rechazado:", error);
});


import axios from 'axios';

axios.get('http://datos.imss.gob.mx/api/action/datastore/search.json?resource_id=ae9ed6bc-058c-4556-bb50-a78c808bcc0c&limit=10')
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

import http from 'http';

const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...\n');
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});


import url from 'url';

console.log(req);
const urlProcesada = url.parse(req.url, true);
 console.log(urlProcesada);
 const queryParams = urlProcesada.query;
console.log(queryParams.x);
