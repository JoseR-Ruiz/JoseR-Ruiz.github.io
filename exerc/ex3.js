import http from 'http';
import url from 'url';

const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    console.log(queryParams.y);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const respuesta = {
        mensaje: "Hola José",
        x: queryParams.x,
        y: queryParams.y
    };

    res.end(JSON.stringify(respuesta));
});

const puerto = 1985;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
