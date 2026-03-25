//Escribe un comentario explicando para qué sirve http
// El módulo http permite crear servidores HTTP y manejar solicitudes y respuestas HTTP en Node.js.
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
// El módulo fs permite interactuar con el sistema de archivos, como leer y escribir archivos.
import fs from 'fs';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       console.log('Ejecutando darBienvenida');
       
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           // El código 500 indica un error interno del servidor.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        // El código 200 indica que la solicitud fue exitosa.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las mascotas
    function getMascotas(req, res) {
        console.log('Ejecutando getMascotas');
        //Esto representa un objeto JSON de una mascota
        //Agrega otra mascota
        const mascotas = [
            {
                "nombre": "Pikachu",
                "color": "Amarillo"
            },
            {
                "nombre": "Bulbasaur",
                "color": "Verde"
            }
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      // JSON.stringify convierte un objeto JavaScript en una cadena JSON para poder enviarla como respuesta HTTP.
      res.end(JSON.stringify(mascotas));
    }


    function mostrarMascotas(req, res) {
      console.log('Ejecutando mostrarMascotas');
      fs.readFile('mascotas.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }

    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarAdoptantes(req, res) {
        console.log('Ejecutando mostrarAdoptantes');
        //Construye una página básica adpotantes.html
        fs.readFile('adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
    function mostrarEquipo(req, res) {
      console.log('Ejecutando mostrarEquipo');
      fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }

    //Esta función deberá enviar un json con los datos de las adoptantes
    function getAdoptantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
      console.log('Ejecutando getAdoptantes');
      const adoptantes = [
        {
          "nombre": "Ana García",
          "edad": 30
        },
        {
          "nombre": "Carlos López",
          "edad": 25
        }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(adoptantes));
    }

    //Agrega una ruta /opinion
    function mostrarOpinion(req, res) {
      console.log('Ejecutando mostrarOpinion');
      fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }

    function manejarRuta404(req, res) {
      console.log('Ejecutando manejarRuta404 para ruta:', req.url);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('¡Oops! Esta página se fue de vacaciones. ¿Quieres buscarla en otro lugar?');
    }

    //incluye el enlace a la documentación de createServer
    // Documentación: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/mascotas') {
        getMascotas(req, res);
      } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res);
      } 
      else if (url === '/mascotas') {
        mostrarMascotas(req, res);
      } 
      else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      //Agrega una ruta /opinion
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      }
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
      verificarEndpoints();
    });

    // Verificación rápida de que los métodos GET y mostrar funcionan
    function verificarEndpoints() {
      const rutas = [
        '/api/mascotas',
        '/api/adoptantes',
        '/mascotas',
        '/adoptantes',
        '/equipo',
        '/opinion',
        '/'    
      ];

      rutas.forEach(ruta => {
        http.get({ hostname: 'localhost', port: puerto, path: ruta, timeout: 2000 }, (res) => {
          console.log(`Verificación ${ruta}: status ${res.statusCode}`);
          res.on('data', () => {}); // consumir body para cerrar la conexión
          res.on('end', () => {});
        }).on('error', (err) => {
          console.error(`Error al verificar ${ruta}:`, err.message);
        });
      });
    }

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html
