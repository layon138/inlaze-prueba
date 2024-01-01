const pool = require("../db/db");

const createPost = async (req, res) => {
  const post = req.body;
  try {
    const user = req.body;
    const insert = await pool.query(
      "INSERT INTO Users VALUES ($1,$2,$3,$4,$5,null,null);",
      [post.userId, post.title, post.content, 0, dayjs().format("YYYY-MM-DD")]
    );
    res.json({
      message: "Post creado",
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

const getPostsList = async (req, res) => {
  console.log(req);
  const response = await pool.query(
    "SELECT * FROM Posts as p INNER JOIN Users as u ON u.id_user = p.id_user;",
    []
  );
  const listPosts = response.rows || [];
  res.json({
    data: {
      list: listPosts,
    },
    status: "success",
  });
};

module.exports = {
  createPost,
  getPostsList,
};
