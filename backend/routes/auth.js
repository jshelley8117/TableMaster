const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    role: req.body.role,
    secPassword: req.body.secPassword,
    profilePic: "",
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user){
      res.status(401).json("Wrong Username");
      return;
    };

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if(OriginalPassword !== req.body.password){
      res.status(401).json("Wrong Password");
      return;
    }
      

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"1d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PASSWORD
router.post("/password", async (req, res) => {
  // const { email, secPassword, password } = req.body;

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || user.secPassword !== req.body.secPassword) {
      return res.status(400).json('Invalid email or secPassword');
    }

    // Encrypt the new password with the same key/salt
    const newEncryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();

    // Update the user's password
    user.password = newEncryptedPassword;

    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PROFILE PICTURE
router.post("/profile-picture", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    // Update the user's profile picture
    user.profilePic = req.body.profilePic;
    await user.save();

    res.status(200).json({ message: 'Profile picture updated successfully' });
});

module.exports = router;