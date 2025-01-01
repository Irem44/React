import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { album } from "./redux/albums";

function AlbumsList() {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(album());
  }, []);
  return <div>AlbumsList</div>;
}

export default AlbumsList;
