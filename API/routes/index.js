const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController')

module.exports = function(){

    // agrega nuevos pacientes via post 
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    // obtine todos los registros de pacientes de la bd 
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )
    // obtiene un apciente especifico por id 
    router.get('/pacientes/:id', 
        pacienteController.obtenerPaciente
    )
    // actualizar un registro
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )
    // elimina un oaciente por su id 
    router.delete('/pacientes/:id', 
        pacienteController.eliminaPaciente
    )

    return router;
}