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
          gender,

        });
        console.log("data enterd");
        const stored= await newdata.save();
        res.status(200).json(stored);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  // exports.drlogin = async (req, res) => {
  //    const { phone } = req.body;
  
  //    const dr = await drs.findOne({ phone: phone });
     
  //    try{

  //      if (!dr) {
  //        return res.status(201).json({message:"Phone No not found"})
  //       }
  //       else {
  //         res.status(201).json({ exists: true ,dr});
  //         console.log("Phone No. Match");
  //       }
  //     }
    
  //   catch (error) {
  //     console.error("Error while querying MongoDB:", error);
  //     res.status(500).json({ error: "Unable to connect with DB" });
  //   }
    
  // };
  