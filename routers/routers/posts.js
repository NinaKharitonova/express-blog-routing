const express = require("express");
const router = express.Router();

//Creiamo un array dove inserire una lista di almeno 5 post
const posts = [
  {
    id: 1,
    title: "Ciambellone",
    content: "Descrizione del piatto",
    img: "/images/ciambellone.jpeg",
    tags: [],
  },
  {
    id: 2,
    title: "Cracker Barbabietola",
    content: "Descrizione del piatto",
    img: "/images/cracker_barbabietola.jpeg",
    tags: [],
  },
  {
    id: 3,
    title: "Pane fritto dolce",
    content: "Descrizione del piatto",
    img: "/images/pane_fritto_dolce.jpeg",
    tags: [],
  },
  {
    id: 4,
    title: "Pasta barbabietola",
    content: "Descrizione del piatto",
    img: "/images/pasta_barbabietola.jpeg",
    tags: [],
  },
  {
    id: 5,
    title: "Torta paesana",
    content: "Descrizione del piatto",
    img: "/images/torta_paesana.jpeg",
    tags: [],
  },
];

// Rotta Index (GET /posts)
router.get("/", (req, res) => {
  res.json({
    message: "Lista dei post",
    count: posts.length,
    posts: posts,
  });
});

// Rotta Show (GET /posts/:id)
router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ message: `Post con ID ${postId} non trovato` });
  }

  res.json({
    message: `Dettaglio del post ${postId}`,
    post: post,
  });
});

// Rotta Create (POST /posts)
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// Rotta Update (PUT /posts/:id)
router.put("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Aggiornamento del post ${postId}`);
});

// Rotta Delete (DELETE /posts/:id)
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Cancellazione del post ${postId}`);
});

module.exports = router;
