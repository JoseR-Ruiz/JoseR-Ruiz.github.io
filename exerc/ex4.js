import http from 'http';
import url from 'url';

const response = await fetch("https://openlibrary.org/subjects/love.json?published_in=1500-1600");
const data = await response.json(); 

const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    console.log(queryParams.y);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const respuesta = data.works[0].title;


    res.end(JSON.stringify(respuesta));
});

const puerto = 1986;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
