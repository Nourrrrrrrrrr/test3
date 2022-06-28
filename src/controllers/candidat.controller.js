
const CandidatModel = require('../models/candidat.model');

// get all candidat list
exports.getCandidatList = (req, res)=> {
    //console.log('here all candidats list');
    CandidatModel.getAllCandidats((err, candidat) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Candidat', candidat);
        res.send(candidat)
    })
}

// get candidat by ID
exports.getCandidatByID = (req, res)=>{
    //console.log('get candidat by id');
    CandidatModel.getCandidatByID(req.params.id, (err, candidat)=>{
        if(err)
        res.send(err);
        console.log('single candidat data',candidat);
        res.send(candidat);
    })
}

// create new candidat
exports.createNewCandidat = (req, res) =>{
    const candidatReqData = new CandidatModel(req.body);
    console.log('candidatReqData', candidatReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.createCandidat(candidatReqData, (err, candidat)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'candidat Created Successfully', data: candidat.insertId})
        })
    }
}

// update candidat
exports.updateCandidat = (req, res)=>{
    const candidatReqData = new CandidatModel(req.body);
    console.log('candidatReqData update', candidatReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CandidatModel.updateCandidat(req.params.id, candidatReqData, (err, candidat)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'candidat updated Successfully'})
        })
    }
}

// delete candidat
exports.deleteCandidat = (req, res)=>{
    CandidatModel.deleteCandidat(req.params.id, (err, candidat)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'candidat deleted successully!'});
    })
}