const Paciente = require('../models/Paciente');

// cuando se crea un nuevo cliente 

exports.nuevoCliente = async (req, res , next)=>{

    // crear objeto con datos de paciente req.body 
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({mensaje: 'el cliente se agrego correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }
   
}

// obtiene todos los pacientes 
exports.obtenerPacientes = async (req, res, next) =>{
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// obtiene paciente por id 
exports.obtenerPaciente = async (req, res, next) =>{
    try {
        const paciente =  await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error),
        next();
    }
}

// actualiza paciente por id 
exports.actualizarPaciente = async (req, res, next)=>{
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
        
    }
}
// elimina un apciente por su id 
exports.eliminaPaciente = async (req, res, next) =>{
    try {
        
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje : ' el paciente fue eliminado'});
        
    } catch (error) {
        console.log(error);
        next();
    }
}