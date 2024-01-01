const pool = require("../db/db");
const dayjs = require("dayjs");

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const insert = await pool.query(
      "INSERT INTO Posts (    id_user , title,content , likes , create_at, update_at, delete_at) VALUES ($1,$2,$3,$4,$5,null,null);",
      [post.userId, post.title, post.content, 0, dayjs().format()]
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

const updatePost = async (req, res) => {
  try {
    const post = req.body;
    const update = await pool.query(
      "UPDATE Posts SET title = $1,  content = $2,update_at=$4  WHERE id_post=$3;",
      [ post.title, post.content, post.postId, dayjs().format()]
    );
    console.log(update)
    res.json({
      message: "Post actualizado",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error al actualizar",
      status: "failed",
    });
  }
};


const deletePost = async (req, res) => {
  try {
    const post = req.body;
    const update = await pool.query(
      "UPDATE Posts SET delete_at=$2  WHERE id_post=$1;",
      [post.postId, dayjs().format()]
    );
    console.log(update)
    res.json({
      message: "Post actualizado",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error al actualizar",
      status: "failed",
    });
  }
};

const getPostsList = async (req, res) => {
  const response = await pool.query(
    `SELECT  p.id_post as postid,p.title ,u.id_user as userId ,u.fullname as userName,p.content as description,p.create_at as createat  FROM Posts as p  INNER JOIN Users as u ON u.id_user = p.id_user
    WHERE p.delete_at IS NULL
    ORDER BY
	p.create_at DESC;`,
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
  updatePost,
  deletePost
};
