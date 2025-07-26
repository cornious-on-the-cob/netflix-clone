"use client";

import Image from "next/image";
import { Movie } from "../../../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../constants/movie";

interface Props {
  netflixOriginals?: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (netflixOriginals && netflixOriginals.length > 0) {
      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      );
    }
  }, [netflixOriginals]);

  if (!movie) {
    return (
      <div className="relative h-[95vh] w-screen bg-black">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            {/* Netflix-style red ring loading animation */}
            <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin-smooth"></div>
            <div
              className="absolute inset-0 w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin-smooth"
              style={{ animationDelay: "-0.3s" }}
            ></div>
            <div
              className="absolute inset-2 w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full animate-spin-smooth"
              style={{ animationDelay: "-0.6s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[95vh] w-screen">
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title || movie?.name || "Movie backdrop"}
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay that matches the page background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#010511] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {movie?.title || movie?.name}
        </h1>
        <p className="text-lg max-w-md mb-4">{movie?.overview}</p>
      <div>
        <button className="bannerButton">Play</button>
        <button className="bannerButton">More Info</button>
      </div>
      </div>
    </div>
  );
}
