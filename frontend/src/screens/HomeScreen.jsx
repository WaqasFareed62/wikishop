import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../Products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} lg={6} md={4} xl={3}>
              <h3> {<Product product={product} />} </h3>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
