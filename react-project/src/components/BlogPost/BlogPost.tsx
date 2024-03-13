import BlogPostModel from "../../models/BlogPostModel";
import CustomThemeButton from "../CustomThemeButton/CustomThemeButton";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  post: BlogPostModel;
  onClick: () => void;
}

export default function BlogPost({ post, onClick }: BlogPostProps) {
  return (
    <div className={styles.blogpost}>
      <h1>{post.title}</h1>
      <div>{post.description}</div>
      <p>{post.content}</p>
      <span>
        {post.date}
        <CustomThemeButton onClick={onClick} type="primary" text="Lesen" />
      </span>
    </div>
  );
}
