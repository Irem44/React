import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "./redux/post";
import { store } from "./redux/store";

function PostList() {
  const dispatch = useDispatch();

  const { posts } = useSelector((store) => store.posts);
  //   console.log(posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);
  return <div>{posts.map((post) => post.title)}</div>;
}

export default PostList;
