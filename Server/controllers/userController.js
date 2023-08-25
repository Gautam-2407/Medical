const users = require("../models/userSchema");

exports.userregister = async (req, res) => {
    const {name, phone, email,dob, gender,history,disease }=req.body;

    if (!name || !phone || !email|| !dob|| !gender|| !history|| !disease){
      return  res.status(401).json({message:"Please enter your name"})
    }

    try{
      const preuser = await users.findOne({phone:phone});

      if (preuser){
        return   res.status(200).send("User already exist")
      }
      else{
        const newuser = new users({
          name,
          phone,
          email,
          dob,
          gender,
          history,
          disease,
          
        });
        const storeData= await newuser.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  // const { username, email, password } = req.body;
  
    // if (!username || !email || !password) {
    //   res.status(400).json({ error: "Fill all Fields" });
    // }
  
    // try {
    //   const preuser = await Stream_ui.findOne({ username: username });
  
    //   if (preuser) {
    //     res.status(400).json({ error: "User already exist" });
    //   } else {
    //     const userregister = new Stream_ui({
    //       username,
    //       email,
    //       password,
    //     });
  
    //     const storeData = await userregister.save();
    //     res.status(200).json(storeData);
    //   }
    // } catch (error) {
    //   res.status(400).json({ error: "Invalid Details", error });
    // }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.userlogin = async (req, res) => {
    // const { username, password } = req.body;
  
    // const user = await Stream_ui.findOne({ username: username });
    // if (!user) {
    //   return res.send("Username not found")
    // }
  
    // try {
    //   const isPasswordValid = await bcrypt.compare(password, user.password);
  
    //   if (isPasswordValid) {
        
  
    //     console.log("Valid");
    //     const login_token = jwt.sign({username: user.username, id: user._id},
    //       SecretKey);
    //       res.status(201).json({ exists: true, username: user.username, token:login_token});
  
    //   }
    //   else {
    //     res.status(201).json({ exists: false });
    //     console.log("Password didn't Match");
    //   }
    // }
    // catch (error) {
    //   console.error("Error while querying MongoDB:", error);
    //   res.status(500).json({ error: "Unable to connect with DB" });
    // }
  console.log("check");
    
  };
  