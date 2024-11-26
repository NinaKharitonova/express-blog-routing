const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

// Importo il router dei post
const postsRouter = require("./routers/routers/posts");

// Uso il router con il prefisso /posts
app.use("/posts", postsRouter);

//Creiamo il progetto base con una rotta
app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

app.get("/blog", (req, res) => {
  const date = {
    posts: posts,
    length: posts.length,
  };

  res.json(date);
});

// Avvia il server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
