var dbConn  = require('../../config/db_config');

var Candidat = function(candidat){
    this.id_candidat = candidat.id_candidat;
    this.id_uti = candidat.id_uti;
    this.statut = candidat.statut;
    this.nom_c = candidat.nom_c;
    this.prenom_c = candidat.prenom_c;
    this.profession = candidat.profession;
    this.date_de_naissance = candidat.date_de_naissance;
    this.lieu_de_naissance = candidat.lieu_de_naissance;
    this.sexe = candidat.sexe;
    this.adresse = candidat.adresse;
    this.telephone = candidat.telephone;
    this.adresse_mail = candidat.adresse_mail;
}

// get all candidats
Candidat.getAllCandidats = (result) =>{
    dbConn.query('SELECT * FROM candidat WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching candidats', err);
            result(null,err);
        }else{
            console.log('candidats fetched successfully');
            result(null,res);
        }
    })
}

// get candidats by ID from DB
Candidat.getCandidatByID = (id, result)=>{
    dbConn.query('SELECT * FROM candidat WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching candidat by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new candidat
Candidat.createCandidat = (candidatReqData, result) =>{
    dbConn.query('INSERT INTO candidat SET ? ', candidatReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('candidat created successfully');
            result(null, res)
        }
    })
}

// update candidat
Candidat.updateCandidat = (id, candidatReqData, result)=>{
    dbConn.query("UPDATE candidat SET id_candidat=?,id_uti=?,statut=?,nom_c=?,prenom_c=?,profession=?,date_de_naissance=?,lieu_de_naissance=?,sexe=?,adresse=?,telephone=?,adresse_mail=? WHERE id_candidat = ?", [candidatReqData.id_candidat,candidatReqData.id_uti,candidatReqData.statut,candidatReqData.nom_c,candidatReqData.prenom_c,candidatReqData.profession,candidatReqData.date_de_naissance,candidatReqData.lieu_de_naissance,candidatReqData.sexe,candidatReqData.adresse,candidatReqData.telephone,candidatReqData.adresse_mail, id], (err, res)=>{
        if(err){
            console.log('Error while updating');
            result(null, err);
        }else{
            console.log("Updated successfully");
            result(null, res);
        }
    });
}


Candidat.deleteEmployee = (id, result)=>{
    dbConn.query("DELETE FROM employees WHERE id=?", [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("Employee deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Candidat;