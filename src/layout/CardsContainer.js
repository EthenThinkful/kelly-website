import React from "react";
import Cards from "./Cards";
import beforeCup from "../Assets/project-pictures/API Pullers/before-cup.jpg";
import afterCup from "../Assets/project-pictures/API Pullers/after-cup.jpg";
import beforeCuttingBoard from "../Assets/project-pictures/API Pullers/before-cutttingboard.jpg";
import afterCuttingBoard from "../Assets/project-pictures/API Pullers/after-cuttingboard.jpg";
import beforePictureFrame from "../Assets/project-pictures/API Pullers/before-picture-frame.jpg";
import afterPictureFrame from "../Assets/project-pictures/API Pullers/after-picture-frame.jpg";
import beforeSpoon from "../Assets/project-pictures/API Pullers/before-spoon.jpg";
import afterSpoon from "../Assets/project-pictures/API Pullers/after-spoon.jpg";
import beforeVase from "../Assets/project-pictures/API Pullers/before-vase.jpg";
import afterVase from "../Assets/project-pictures/API Pullers/after-vase.jpg";

function CardsContainer() {
  return (
    <>
      <h3 className="text-center font-serif text-2xl font-extrabold text-decoration-line: underline underline-offset-8 decoration-gray-300">
        Before and After Photos
      </h3>
      <br />
      <div className="cards-container flex flex-wrap gap-5 text-indigo-900 ">
        <Cards
          itemName="Painted Ceramic Cup"
          before={beforeCup}
          after={afterCup}
          description="Sed ut perspiciatis unde  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          hashtag1="cup"
          hashtag2="farmhouse"
        />
        <Cards
          itemName="Farmhouse Cutting Board"
          before={beforeCuttingBoard}
          after={afterCuttingBoard}
          description="Nemo enim ipsam  aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          hashtag1="cuttingboard"
          hashtag2="farmhouse"
        />
        <Cards
          itemName="Painted Picture Frame"
          before={beforePictureFrame}
          after={afterPictureFrame}
          description="Neque porro quisquam  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          hashtag1="pictureframe"
          hashtag2="rustic"
        />
        <Cards
          itemName="Holiday Spoon"
          before={beforeSpoon}
          after={afterSpoon}
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          hashtag1="spoon"
          hashtag2="rustic"
        />
        <Cards
          itemName="Milk Vase Decor"
          before={beforeVase}
          after={afterVase}
          description="Ut enim ad minim a non numquam eius modi tempor aliquip ex ea commodo consequat."
          hashtag1="vase"
          hashtag2="sunflower"
        />
      </div>
    </>
  );
}

export default CardsContainer;
