import styles from "./OverviewPage.module.css"
import BlogPost from "../../components/BlogPost/BlogPost";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import BlogPostModel from "../../models/BlogPostModel";

export default function OverviewPage () {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPostModel[]>([]);


  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then(response => response.json())
      .then(data =>  setBlogPosts(data))
  },[])

  return <div className={styles.container}>
    <h1>Unser Blog</h1>
    <div>
      {blogPosts.map(blogPost => <BlogPost key={blogPost.id} blogpost={blogPost} onClick={()=> navigate("/overview/"+blogPost.id)}/>)}
    </div>
  </div>
}