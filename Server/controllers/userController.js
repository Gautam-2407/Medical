const users = require("../models/userSchema");

exports.userregister = async (req, res) => {
    const {name, phone, email, birth, gender, role }=req.body;

    if (!name || !phone || !email|| !birth|| !gender || !role )
    {
      res.status(400).json({ error: "Fill all Fields" });
    }
    
    try{
      const preuser = await users.findOne({phone:phone});
      console.log("try");
      if (preuser){
        console.log("2try");
        res.status(200).json("User already exist")
        console.log("3try");
      }
      else{
        console.log("4try");
        const newuser = new users({
          name,
          phone,
          email,
          birth,
          gender,
          role
        });
        console.log("5try");
        const storeData= await newuser.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.userlogin = async (req, res) => {
     const { phone } = req.body;
  
     const user = await users.findOne({ phone: phone });
     
     try{

       if (!user) {
         return res.send("Phone No. not found")
        }
        else {
          res.status(201).json({ exists: true ,user});
          console.log("Phone No. Match");
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  