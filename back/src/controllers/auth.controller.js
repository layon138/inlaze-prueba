const dayjs = require("dayjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require('jsonwebtoken');
const pool = require('../db/db');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey', { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 })

const authUser = async (req, res) => {
  const user = req.body;
  const response = await pool.query(
    "SELECT *,id_user as userId FROM Users WHERE email = $1",
    [user.email]
  );
  const usuarios = response.rows || [];
  const encryptedString = cryptr.decrypt(usuarios[0].pass) || '';
  if (usuarios.length > 0 &&   encryptedString===user.password) {
    const token   = jwt.sign({ user: response[0] }, process.env.TOKEN_SECRET);
    res.json({
      message: "usuario encontrado",
      user:usuarios[0],
      status: "success",
      token: token,
    });
  } else {
    res.json({
      message: "usuario no encontrado",
      status: "failed",
      token: "",
    });
  }
};



const createUser = async (req, res) => {
  try {
    const user = req.body;
    const encryptedString = cryptr.encrypt(user.password);
    await pool.query(
      "INSERT INTO Users VALUES ($1,$2,$3,$4,$5,$6,null,null);",
      [
        uuidv4(),
        user.fullname,
        user.dateborn,
        user.email,
        encryptedString,
        dayjs().format("YYYY-MM-DD"),
      ]
    );
    res.json({
      message: "usuario creado",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error al crear",
      status: "failed",
    });
  }
};

module.exports = {
  createUser,
  authUser,
};
