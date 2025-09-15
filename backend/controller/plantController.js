const plantModel=require('../models/plantModel');


exports.getplants=async (req,res)=>{
try{
const plants=await plantModel.find({});

res.status(200).json({message:"All Plants sucessfully fetched",plants});

}


catch(e){

res.json(e);

}
};

exports.getSinglePlant=async (req,res)=>{

    try{
const plant=await plantModel.findById(req.params.id);

res.status(200).json({success:true,message:"single plant has been fetched successfully",plant})
    }

    catch(e){

        res.json(e);
    }


};

exports.createNewPlant=async (req,res)=>{
    

    try{

        const newPlant=await plantModel.create(req.body);

        res.json({message:"newPlant has been created succesfully",success:true,newPlant})
    }
    catch(e){

        res.json(e);
    }

}

exports.deletePlant=async (req,res)=>{

    try{

        const deletePlant=await plantModel.findByIdAndDelete(req.params.id);
        res.json({message:"plant has been deleted successfully",sucess:true,deletePlant});
    }
catch(e){
    res.json(e);
}

}

exports.updatePlant=async (req,res)=>{

    try{

    const updatedPlant=await plantModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.json({updatedPlant,message:"Plant updated succesfully"});

    }

    catch(e){

        res.json(e);
    }
}