const drs = require("../models/drSchema");

exports.drform = async (req, res) => {
    const {license, exp, speciality,resume }=req.body;

    if (!license|| !exp ||!speciality || !resume){
      return  res.status(401).json({message:"Please Fill all Fields"})
    }

    try{
      const predr = await drs.findOne({license:license});

      if (predr){
        return   res.status(200).json("Dr already exist")
      }
      
      else{
        console.log ("data started entering");
        const newdata = new drs({
          license,
          exp,
          speciality,
          resume

        });
        console.log("data enterd");
        const stored= await newdata.save();
        res.status(200).json(stored);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
