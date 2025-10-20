import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          <Card
            img="https://i.pinimg.com/1200x/98/7d/92/987d92558c0659975357382316c31a71.jpg"
            title="Churrasco"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            buttonText="Find Out More!"
          />
          <Card
            img="https://i.pinimg.com/736x/91/36/b6/9136b687733198cbbd6f58cfbc747ffe.jpg"
            title="Costillas de res"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            buttonText="Find Out More!"
          />
          <Card
            img="https://i.pinimg.com/1200x/2b/09/a0/2b09a0840ab647dae2d5d47267d59e06.jpg"
            title="Picanha"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            buttonText="Find Out More!"
          />
          <Card
            img="https://i.pinimg.com/1200x/10/33/f2/1033f2c0a6a7535332bcdb6db9d7ae77.jpg"
            title="Chorizo parrillero
"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            buttonText="Find Out More!"
          />
        </div>

      </div>
      <Footer />


    </div>
  );
};

export default Home;