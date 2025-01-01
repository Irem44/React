import { useState } from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { arttır, azalt } from "./redux/counterSlice";
import UserList from "./UserList";
import PostList from "./PostList";
import AlbumsList from "./AlbumsList";

function App() {
  return (
    <div>
      {/* <UserList /> */}
      {/* <PostList /> */}

      <AlbumsList />
    </div>
  );
}

export default App;
