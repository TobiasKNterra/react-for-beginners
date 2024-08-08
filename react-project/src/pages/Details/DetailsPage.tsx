import {useNavigate, useParams} from "react-router-dom";
import BlogPostModel from "../../models/BlogPostModel";
import styles from "./DetailsPage.module.css"
import CustomThemeButton from "../../components/CustomThemeButton/CustomThemeButton";
import {useEffect, useState} from "react";

export default function DetailsPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [blogPost, setBlogPost] = useState<BlogPostModel>();


  useEffect(() => {
    fetch("http://localhost:3333/posts/" + id)
    .then(response => response.json())
    .then(data => setBlogPost(data))
  }, [id])

  return (blogPost ?
      <div className={styles.container}>
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.description}</h2>
        <p>{blogPost.content}</p>
        <CustomThemeButton text={"Zurück"} type={"secondary"}
                           onClick={() => navigate("/overview")}/>
      </div> : <div>Not found!</div>)
}