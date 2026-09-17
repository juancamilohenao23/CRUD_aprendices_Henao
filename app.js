const express = require('express');
<<<<<<< HEAD
const registroMiddleware = require('./src/middleware/registroMiddleware')
const manejadorErrores = require("./src/middleware/manejadorErrores")
const autenticarToken = require('./src/middleware/autenticarToken')
const jwt = require('jsonwebtoken');

const app = express();
require('dotenv/config');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const multer = require('multer')
const almacenamiento = multer.diskStorage({
    destination: (request, file, cb) =>{},
    filename: {}
})
app.use(registroMiddleware)
app.use(autenticarToken)


app.use ((req, res, next) => {
    const tiempoMilisegundos = Date.now()
    console.log(`Tiempo: ${tiempoMilisegundos}`)
    next()
})
=======
const app = express();
require('dotenv/config');

const port = process.env.PUERTO || 3000;

// Permite recibir JSON
app.use(express.json());
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d

// Librerías para leer y manejar archivos
const sistemaArchivo = require('fs');
const ruta = require('path');

// Importar las validaciones
<<<<<<< HEAD
const validarAprendiz = require('./validaciones/validar');
// Ruta del archivo listaDatos.json
const rutaArchivoJson = ruta.join(__dirname, 'listaDatos.json');

=======
const validarAprendiz = require('./validaciones/validaciones');

// Ruta del archivo listaDatos.json
const rutaArchivoJson = ruta.join(__dirname, 'listaDatos.json');


// ================================
// RUTA RAÍZ
// ================================

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
app.get('/', (req, res) => {
    res.send('API RESTFUL - CRUD Aprendices');
});

<<<<<<< HEAD
=======

// ================================
// GET - TODOS LOS APRENDICES
// ================================

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
app.get('/api/aprendices', (req, res) => {

    sistemaArchivo.readFile(rutaArchivoJson, 'utf-8', (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: 'Error al leer el archivo'
            });
        }

        try {

            const listaAprendices = JSON.parse(datos);

            res.json(listaAprendices);

        } catch (error) {

            res.status(500).json({
                Error: 'Error al procesar el archivo JSON'
            });
        }
    });
});

<<<<<<< HEAD
app.get('/api/aprendices/:dni', (req, res) => {
    const dni = parseInt(req.params.dni);
=======

// ================================
// GET - UN APRENDIZ POR DNI
// ================================

app.get('/api/aprendices/:dni', (req, res) => {

    const dni = parseInt(req.params.dni);

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
    sistemaArchivo.readFile(rutaArchivoJson, 'utf-8', (error, datos) => {

        if (error) {
            return res.status(500).json({
<<<<<<< HEAD
                Error: 'Error al leer el archivo'});
        }

        try {
            const listaAprendices = JSON.parse(datos);
            const aprendiz = listaAprendices.find(
                aprendiz => aprendiz.dni === dni);

            if (!aprendiz) {
                return res.status(404).json({
                    Error: 'Aprendiz no encontrado'});
            }
            res.json(aprendiz);

        } catch (error) {
=======
                Error: 'Error al leer el archivo'
            });
        }

        try {

            const listaAprendices = JSON.parse(datos);

            const aprendiz = listaAprendices.find(
                aprendiz => aprendiz.dni === dni
            );

            if (!aprendiz) {
                return res.status(404).json({
                    Error: 'Aprendiz no encontrado'
                });
            }

            res.json(aprendiz);

        } catch (error) {

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
            res.status(500).json({
                Error: 'Error al procesar el archivo JSON'
            });
        }
    });
});

<<<<<<< HEAD
app.post('/api/aprendices', (req, res) => {

    const datoAprendiz = req.body;
=======

// ================================
// POST - CREAR APRENDIZ
// ================================

app.post('/api/aprendices', (req, res) => {

    const datoAprendiz = req.body;

    // Validar datos
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
    const errorValidacion = validarAprendiz(datoAprendiz);

    if (errorValidacion) {
        return res.status(400).json({
            Error: errorValidacion
        });
    }

    sistemaArchivo.readFile(
        rutaArchivoJson,
        'utf-8',
        (error, datos) => {
<<<<<<< HEAD
=======

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
            if (error) {
                return res.status(500).json({
                    Error: 'Error al leer el archivo'
                });
            }
<<<<<<< HEAD
            try {
                const listaAprendices = JSON.parse(datos);
                let nuevoDni = 1;
=======

            try {

                const listaAprendices = JSON.parse(datos);

                // Generar DNI automáticamente
                let nuevoDni = 1;

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                if (listaAprendices.length > 0) {
                    nuevoDni =
                        Math.max(
                            ...listaAprendices.map(
<<<<<<< HEAD
                                aprendiz => aprendiz.dni || 0)) + 1;
                }

=======
                                aprendiz => aprendiz.dni || 0
                            )
                        ) + 1;
                }

                // Crear nuevo aprendiz
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                const nuevoAprendiz = {
                    dni: nuevoDni,
                    ...datoAprendiz
                };
<<<<<<< HEAD
                listaAprendices.push(nuevoAprendiz);

=======

                // Agregar aprendiz
                listaAprendices.push(nuevoAprendiz);

                // Guardar archivo
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                sistemaArchivo.writeFile(
                    rutaArchivoJson,
                    JSON.stringify(listaAprendices, null, 2),
                    error => {

                        if (error) {
                            return res.status(500).json({
                                Error: 'No se puede registrar el aprendiz'
                            });
                        }

                        res.status(201).json(nuevoAprendiz);
                    }
                );

            } catch (error) {

                res.status(500).json({
                    Error: 'Error al procesar el archivo JSON'
                });
            }
        }
    );
});

<<<<<<< HEAD
=======

// ================================
// PUT - EDITAR APRENDIZ
// ================================

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
app.put('/api/aprendices/:dni', (req, res) => {

    const dni = parseInt(req.params.dni);
    const datosAprendiz = req.body;

<<<<<<< HEAD
=======
    // Validar datos
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
    const errorValidacion = validarAprendiz(datosAprendiz);

    if (errorValidacion) {
        return res.status(400).json({
            Error: errorValidacion
        });
    }
<<<<<<< HEAD
=======

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
    sistemaArchivo.readFile(
        rutaArchivoJson,
        'utf-8',
        (error, datos) => {
<<<<<<< HEAD
=======

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
            if (error) {
                return res.status(500).json({
                    Error: 'Error al leer el archivo'
                });
            }
<<<<<<< HEAD
            try {
                let listaAprendices = JSON.parse(datos);
=======

            try {

                let listaAprendices = JSON.parse(datos);

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                const existeAprendiz = listaAprendices.some(
                    aprendiz => aprendiz.dni === dni
                );

                if (!existeAprendiz) {
                    return res.status(404).json({
                        Error: 'Aprendiz no encontrado'
                    });
                }
<<<<<<< HEAD
=======

                // Modificar aprendiz
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                listaAprendices = listaAprendices.map(
                    aprendiz =>
                        aprendiz.dni === dni
                            ? {
                                ...aprendiz,
                                ...datosAprendiz,
                                dni: dni
                            }
                            : aprendiz
                );

<<<<<<< HEAD
=======
                // Guardar cambios
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                sistemaArchivo.writeFile(
                    rutaArchivoJson,
                    JSON.stringify(listaAprendices, null, 2),
                    error => {

                        if (error) {
                            return res.status(500).json({
                                Error: 'No se puede actualizar el aprendiz'
                            });
                        }
<<<<<<< HEAD
=======

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                        const aprendizActualizado =
                            listaAprendices.find(
                                aprendiz => aprendiz.dni === dni
                            );
<<<<<<< HEAD
                        res.json(aprendizActualizado);
                    }
                );
            } catch (error) {
=======

                        res.json(aprendizActualizado);
                    }
                );

            } catch (error) {

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                res.status(500).json({
                    Error: 'Error al procesar el archivo JSON'
                });
            }
        }
    );
});

<<<<<<< HEAD
app.delete('/api/aprendices/:dni', (req, res) => {

    const dni = parseInt(req.params.dni);
=======

// ================================
// DELETE - ELIMINAR APRENDIZ
// ================================

app.delete('/api/aprendices/:dni', (req, res) => {

    const dni = parseInt(req.params.dni);

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
    sistemaArchivo.readFile(
        rutaArchivoJson,
        'utf-8',
        (error, datos) => {

            if (error) {
                return res.status(500).json({
                    Error: 'Error al leer el archivo'
                });
            }

            try {
<<<<<<< HEAD
                let listaAprendices = JSON.parse(datos);
                const existeAprendiz = listaAprendices.some(
                    aprendiz => aprendiz.dni === dni
                );
=======

                let listaAprendices = JSON.parse(datos);

                const existeAprendiz = listaAprendices.some(
                    aprendiz => aprendiz.dni === dni
                );

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                if (!existeAprendiz) {
                    return res.status(404).json({
                        Error: 'Aprendiz no encontrado'
                    });
                }
<<<<<<< HEAD
                listaAprendices = listaAprendices.filter(
                    aprendiz => aprendiz.dni !== dni
                );
=======

                // Eliminar aprendiz
                listaAprendices = listaAprendices.filter(
                    aprendiz => aprendiz.dni !== dni
                );

                // Guardar archivo actualizado
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                sistemaArchivo.writeFile(
                    rutaArchivoJson,
                    JSON.stringify(listaAprendices, null, 2),
                    error => {

                        if (error) {
                            return res.status(500).json({
                                Error: 'No se puede eliminar el aprendiz'
                            });
                        }

                        res.json({
                            mensaje: 'Aprendiz eliminado correctamente'
                        });
                    }
                );
<<<<<<< HEAD
            } catch (error) {
=======

            } catch (error) {

>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
                res.status(500).json({
                    Error: 'Error al procesar el archivo JSON'
                });
            }
        }
    );
});

<<<<<<< HEAD
//error para provocar un error
app.get("/error", (req, res, next) => {
    next(new Error("Error provocado"));
});

//endpoint con ruta protegida
app.get("/rutaProtegida", (req, res) => {
    res.json({mensaje: "Este es una ruta protegida"})
})

//endpoint inicio de sesion para generar token
app.post("/login", (req, res) => {
    const {usuario, clave} = req.body
    //simular bd
    const usuariobd = {
        "usuario": "Paula",
        "clave": "123456"
    }
    //validar datos del usuario
    if (usuarios === usuariobd.usuario || clave !== usuariobd.clave) {
        res.json({mensaje: "Usuario y/o clave incorrectos."})
    }
    //crear token
    const token = jwtoken.sing(
        //pasamos datos del usuario
        {user: usuario},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )
    res.json({token})
})

//error 
app.use(manejadorErrores)

app.listen(port, () => {
    console.log(`SERVER: http://localhost:${port}`);
});
=======

// ================================
// SERVIDOR
// ================================

app.listen(port, () => {
    console.log(`SERVER: http://localhost:${port}`);
});
>>>>>>> 4e528f829b3afe421ea33a2be37202a029dbdc1d
