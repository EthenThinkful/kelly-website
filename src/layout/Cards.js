import React from "react";
import beforeCup from "../Assets/project-pictures/API Pullers/before-cup.jpg";
import afterCup from "../Assets/project-pictures/API Pullers/after-cup.jpg";

function Cards() {
  return (
    <>
      <h3 className="font-serif text-xl text-center flex">
        Before and After Photos
      </h3>
      <br />
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="flex center justify-center gap-3">
          <img class="w-44" src={beforeCup} alt="cup before" />
          <img class="w-44" src={afterCup} alt="cup after" />
        </div>

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Painted ceramic cups</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #cup
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #ceramic
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #farmhouse
          </span>
        </div>
      </div>
    </>
  );
}

export default Cards;
