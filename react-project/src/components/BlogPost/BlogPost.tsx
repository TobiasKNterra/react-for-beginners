import BlogPostModel from "../../models/BlogPostModel";
import CustomThemeButton from "../CustomThemeButton/CustomThemeButton";
import style from "./BlogPost.module.css";

interface BlogPostProps {
  blogpost: BlogPostModel;
  onClick: () => void;
}

export default function BlogPost ({ blogpost, onClick }: BlogPostProps) {
  return (
    <div className={style.blogpost}>
      <h1>{blogpost.title}</h1>
      <div>{blogpost.description}</div>
      <p>{blogpost.content}</p>
      <span>
        <span>{blogpost.date}</span>
        <CustomThemeButton text={"Weiterlesen"} type={"primary"} onClick={onClick} />
      </span>
    </div>
  );
}