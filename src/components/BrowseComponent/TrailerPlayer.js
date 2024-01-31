import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TrailerPlayer = () => {
  const navigate = useNavigate();
  const trailervideo = useSelector((store)=>store.player?.trailer)
  console.log("aajao",trailervideo)
  return (
    <>
      <div className="flex w-full content-between">
        <div
          className="text-lg font-bold text-red-500 text-center m-4 cursor-pointer hover:bg-slate-500"
          onClick={() => {
            navigate("/Browse");
          }}
        >
          Back to Browse Page
        </div>
        <div className="text-lg font-bold text-red-500 text-center m-4">
          TrailerPlayer
        </div>
      </div>
      <iframe
        className="w-screen h-screen"
        src={"https://www.youtube.com/embed/"+trailervideo.key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default TrailerPlayer;
