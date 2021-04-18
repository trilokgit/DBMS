import React, { useEffect } from "react";
import Product from "../components/Product";
import "./HomeScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispach = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispach(listProducts());
  }, [dispach]);

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <Product key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />)
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
