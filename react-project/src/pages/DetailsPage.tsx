import { useNavigate, useParams } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import { testBlogPosts } from "../testdata/testData";
import { useState, useEffect } from "react";
import BlogPostModel from "../models/BlogPostModel";
import CustomThemeButton from "../components/CustomThemeButton/CustomThemeButton";

export default function DetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostModel | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3333/posts/" + id)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles["container"]}>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p>{post.content}</p>
      <CustomThemeButton
        onClick={() => navigate("/overview")}
        type="secondary"
        text="Zurück"
      />
    </div>
  );
}
