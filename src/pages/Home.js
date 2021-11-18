import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
// import Footer from '../components/Footer'
import Post from "../components/Post";

const Home = () => {
  const staticPost = {
    title: "Título B)",
    topic: "Assunto B)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices ex elit, ut lobortis sem accumsan nec. Nulla sit amet vehicula purus, at facilisis purus. Morbi cursus metus vitae ex laoreet tempor. Nunc urna ipsum, euismod ac sagittis sit amet, posuere id enim. Sed luctus lobortis tortor, et ornare lectus consectetur vitae. Duis nec ligula id orci vestibulum congue. Donec rutrum varius enim. Maecenas fermentum elit eget libero dignissim facilisis.",
    comments: 42
  };

  console.log(Post);

  return (
    <>
      <Grid container columns={24}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={21}>
          <Post
            title={staticPost.title}
            topic={staticPost.topic}
            content={staticPost.content}
            comments={staticPost.comments}
          />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
