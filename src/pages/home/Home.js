import React from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/siderbar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
