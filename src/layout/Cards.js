import React from "react";

function Cards({ itemName, before, after, description, hashtag1, hashtag2 }) {
  return (
    <>
      <br />
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="flex center justify-center gap-3">
          <img class="w-44" src={before} alt="cup before" />
          <img class="w-44" src={after} alt="cup after" />
        </div>

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{itemName}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {hashtag1}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {hashtag2}
          </span>
        </div>
      </div>
    </>
  );
}

export default Cards;
