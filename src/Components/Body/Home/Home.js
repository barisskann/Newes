import React from "react";
import Carousel from "./Carousel";
import Koleksionlar from "./Koleksionlar";
import Video from "./Video";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Video />
      <Koleksionlar />
    </div>
  );
}
