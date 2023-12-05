require("dotenv").config();
const mysql = require("mysql2/promise");

const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // const getMovies = (req, res) => {
  //   database
  //     .query("select * from movies")
  //     .then(([movies]) => {
  //       res.json(movies);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // const getMovieById = (req, res) => {
  //   const id = parseInt(req.params.id);
  
  //   database
  //   .query("select * from movies where id = ?", [id])
  //   .then(([movies]) => {
  //       if (movies.length > 0) {
  //         res.json(movies[0]); 
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });

  // database
  // .getConnection()
  // .then(() => {
  //   console.log("Can reach database");
  // })
  // .catch((err) => {
  //   console.error(err);
  // })};

  // const getUsers = (req, res) => {
  //   database
  //     .query("select * from users")
  //     .then(([users]) => {
  //       res.json(users);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };
  
  // const getUserById = (req, res) => {
  //   const id = parseInt(req.params.id);
  
  //   database
  //     .query("select * from users where id = ?", [id])
  //     .then(([users]) => {
  //       if (users.length > 0) {
  //         res.json(users[0]);
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };
  
  module.exports = {
    database
  };
  