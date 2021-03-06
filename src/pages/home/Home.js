import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/siderbar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <Banner />
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Footer />
    </>
  );
}
