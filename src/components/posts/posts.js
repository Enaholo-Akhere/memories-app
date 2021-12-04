import React from "react";
import Post from "./post/post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => {
    return state.PostsReducer.data;
  });
  console.log(Array.isArray(posts));
  //const typ = typeof posts;
  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item sx={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;