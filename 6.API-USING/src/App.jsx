import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  //async ve await kullanmak zorundayız.Çünkü atılan istek asenkron çalışır ve beklemek zorundayız.

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return <div></div>;
}

export default App;
