const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//Creiamo un array dove inserire una lista di almeno 5 post
const posts = [
  {
    title: "Ciambellone",
    content: "Descrizione del piatto",
    img: "/images/ciambellone.jpeg",
    tags: [],
  },
  {
    title: "Cracker Barbabietola",
    content: "Descrizione del piatto",
    img: "/images/cracker_barbabietola.jpeg",
    tags: [],
  },
  {
    title: "Pane fritto dolce",
    content: "Descrizione del piatto",
    img: "/images/pane_fritto_dolce.jpeg",
    tags: [],
  },
  {
    title: "Pasta barbabietola",
    content: "Descrizione del piatto",
    img: "/images/pasta_barbabietola.jpeg",
    tags: [],
  },
  {
    title: "Torta paesana",
    content: "Descrizione del piatto",
    img: "/images/torta_paesana.jpeg",
    tags: [],
  },
];

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
