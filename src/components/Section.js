import React from "react";
import Logo from "./catty.jpg";

export default function Section() {
  return (
    <div className="music-head">
      <img src= {Logo} alt="music logo" />
      <section className="catty-music">
        <div>
          <p>My Music App Top 5 charts (18.03.20)</p>
          <p>Unknown Artist</p>
          <p>2020 . Charts . 5 songs</p>
        </div>
        <div>
          <i class="fa fa-play">Play all</i>
          <i class="fa fa-plus">Add to</i>
          <i class="fa fa-ellipsis-h">More</i>
        </div>
      </section>
    </div>
  );
}
