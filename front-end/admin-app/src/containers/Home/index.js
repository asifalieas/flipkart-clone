import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

function Home() {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "5rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to admin dashboard</h1>
        </Jumbotron>
      </Layout>
    </div>
  );
}

export default Home;
