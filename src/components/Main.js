import React from "react";
import Section from "./Section";
import MusicList from "./music_list";

export default function Main() {
  return (
    <main>
      <aside>
        <i class="fa fa-bars" />
        <i class="fa fa-home" />
        <i class="fa fa-search" />
        <i class="fa fa-user" />
        <i class="fa fa-cog" />
      </aside>
      <section className="content">
        <Section />
        <MusicList />
      </section>
    </main>
  );
}
