import { useNavigate } from "react-router-dom";
import BlogPost from "../components/BlogPost/BlogPost";
import styles from "./OverviewPage.module.css";
import BlogPostModel from "../models/BlogPostModel";
import { useEffect, useState } from "react";

export default function OverviewPage() {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPostModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  return (
    <div className={styles["container"]}>
      <h1>Unser Blog</h1>
      <div>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            onClick={() => navigate("/overview/" + post.id)}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}
