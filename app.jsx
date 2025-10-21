import React from "react";
import CardNFT from "./components/Card";
import image from "./assets/image-equilibrium.jpg";
import avatar from "./assets/image-avatar.png";

function App() {
  return (
    <div className="min-h-screen bg-[#0d192b] flex items-center justify-center p-4">
      <CardNFT
        image={image}
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
        price="0.041"
        timeLeft="3 days left"
        author={{
          name: "Jules Wyvern",
          image: avatar,
        }}
      />
    </div>
  );
}

export default App;
