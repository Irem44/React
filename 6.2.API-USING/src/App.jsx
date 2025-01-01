import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const base_url = "http://localhost:3000";
const json_url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const getCustomer = async () => {
    const response = await axios.get(base_url + "/customers");
    console.log(response.data);
  };

  const getCustomerId = async (id) => {
    const response = await axios.get(`${base_url}/customers/${id}`);
    console.log(response.data.id);
    return response.data.id;
  };

  const posted = async (userId) => {
    const response = await axios.get(`${json_url}/${userId}`);
    return response.data;
  };

  const getPost = async () => {
    const response = await getCustomerId("2");
    const response2 = await posted(response);
    console.log(response2);
  };

  const createCustomer = async (newUser) => {
    const response = await axios.post(`${base_url}/customers`, newUser);
    console.log(response);
  };

  const updated = async (id, updatedUser) => {
    await axios.put(`${base_url}/customers/${id}`, updatedUser);
  };

  const deleted = async (id) => {
    await axios.delete(`${base_url}/customers/${id}`, id);
  };

  useEffect(() => {
    getPost();
    // getCustomer();
    // getCustomerId(2);
    // const user = {
    //   name: "Elif",
    //   surname: "Can",
    //   password: "444",
    //   email: "eml@gmail.com",
    // };
    // createCustomer(user);
    // updated("1", {
    //   name: "Banu",
    //   surname: "Demir",
    //   password: "222",
    //   email: "bn@gmail.com",
    // });
    //deleted(1);
  }, []);

  return <div></div>;
}

export default App;
