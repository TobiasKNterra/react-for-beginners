// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an Express application
const app = express();
app.use(cors({ origin: "*" }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL ?? "mongodb://localhost:27017/blog", {
  useUnifiedTopology: true,
});

// Define a schema for the blog posts
const postSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  description: String,
  date: String,
});

// Create a model for the blog posts
const Post = mongoose.model("Post", postSchema);

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes for the blog posts
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  const postResponse = posts.map((post) => {
    const postObject = post.toObject();
    delete postObject._id;
    delete postObject.__v;

    return postObject;
  });

  res.send(postResponse);
});

app.post("/posts", async (req, res) => {
  const lastPost = await Post.find().sort({ id: -1 }).limit(1);
  console.log(lastPost);
  const newPost = new Post(req.body);
  newPost.id = lastPost.length > 0 ? Number(lastPost[0].id + 1) : Number(1);
  console.log(newPost);
  await newPost.save();
  res.send(newPost);
});

app.put("/posts/:id", async (req, res) => {
  const updatedPost = await Post.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    {
      new: true,
    }
  );

  res.send(updatedPost);
});

app.delete("/posts/:id", async (req, res) => {
  await Post.findOneAndDelete({ id: Number(req.params.id) });
  res.send({ message: "Post deleted" });
});

app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ id: Number(req.params.id) });

    if (!post) return res.status(404).send({ message: "Post not found" });
    const postResponse = post.toObject();
    delete postResponse._id;
    delete postResponse.__v;

    res.send(postResponse);
  } catch (error) {
    res.status(500).send({ message: "Server error: " + error.message });
  }
});

// Start the server
app.listen(3333, () => console.log("Server is running on port 3333"));
