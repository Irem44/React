import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "./redux/userSlice";
import Users from "./Users";

function UserList() {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.users);
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return <div>{users && users.map((user) => <Users user={user} />)}</div>;
}

export default UserList;
