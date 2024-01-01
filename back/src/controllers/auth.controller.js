const dayjs = require("dayjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require('jsonwebtoken');
const pool = require('../db/db');



const authUser = async (req, res) => {
  const user = req.body;
  const response = await pool.query(
    "SELECT * FROM Users WHERE email = $1 and pass=$2",
    [user.email, user.password]
  );
  const usuarios = response.rows || [];
  if (usuarios.length > 0) {
    const token   = jwt.sign({ foo: 'bar' }, 'shhhhh');
    res.json({
      message: "usuario encontrado",
      user:response[0],
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
    await pool.query(
      "INSERT INTO Users VALUES ($1,$2,$3,$4,$5,$6,null,null);",
      [
        "123456",
        user.fullname,
        user.dateborn,
        user.email,
        user.password,
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
