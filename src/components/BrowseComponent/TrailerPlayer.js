import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TrailerPlayer = () => {
  const navigate = useNavigate();
  const trailervideo = useSelector((store)=>store.player?.trailer)
  return (
    <>
      <div className="flex w-full content-between bg-slate-400">
        <div
          className="text-lg font-bold text-orange-500 text-center m-4 cursor-pointer hover:bg-slate-500"
          onClick={() => {
            navigate("/Browse");
          }}
        >
          Back to Browse Page
        </div>
        <div className="text-lg font-bold text-red-300 text-center m-4">
          TrailerPlayer
        </div>
      </div>
      {trailervideo && <iframe
        className="w-screen h-screen"
        src={"https://www.youtube.com/embed/"+trailervideo.key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>}
      {!trailervideo && 
      <div className="bg-slate-400 text-center   text-red-300 text-2xl h-screen">
        No trailer video found related to this movie
      </div>

      }
    </>
  );
};

export default TrailerPlayer;
