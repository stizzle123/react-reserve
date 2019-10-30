import React, { useEffect } from "react";
import axios from "axios";

function Home({ products }) {
  console.log(products);
  // useEffect(() => {
  //   console.log(props);
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = "http://localhost:3000/api/products";
  //   try {
  //     const res = await axios.get(url);
  //     const data = res.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/products";
  const res = await axios.get(url, { withCredentials: true });
  return { products: res.data };
};

export default Home;
