import React from "react";

import { FormattedMessage } from "react-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import artistFotos from "../service/artistFotos";

import "./AboutArtistStyles.css";

export default function AboutArtist() {
  return (
    <div className="aboutartist-wrap">
      <h1>
        <FormattedMessage
          id="aboutArtist.header"
          defaultMessage="About me and achievements"
        />
      </h1>
      <Swiper
        className="artist-swiper"
        effect="cube"
        grabCursor={true}
        loop
        modules={[Autoplay, EffectCube]}
        autoplay={{ delay: 4000 }}
      >
        {artistFotos.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.src} alt={img.alt} title={img.title} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      <p>
        <FormattedMessage
          id="aboutArtist.p1"
          defaultMessage="For the first time, I saw painted flowers on the walls of a clay house in my grandmother's village in Petrykivka, Dnipropetrovsk region when I was 10 years old. Bright flowers, birds and amazing plots captured my childhood imagination."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p2"
          defaultMessage="The Ukrainian tradition of wall painting in peasant's houses existed as early as 300 years ago. Many generations of native masters from Petrykyvka carefully passed down their skills from grandmother to granddaughter, preserving the traditions and sacred meanings of the patterns. No one in my family drew. However, my father always supported my creativity. So, thanks to him, I became more familiar with the special Ukrainian ethnic painting."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p3"
          defaultMessage="The Druzhba factory worked in the village of Petrikivka for 40 years, so my father sent me to study with the famous artist Fyodor Panko. And it was in the workshops of the factory that I saw an unusual way of painting berries and flowers with my fingers. The brushes were also homemade from cat fur and were called 'kittyka'. At the factory, painters painted bright wooden caskets, plates, spoons, chests, etc. in huge batches. Therefore, almost every Ukrainian person has an idea about the Petrykiv painting. I was lucky to see all technological processes and learn to distinguish Ukrainian painting from others thanks to the technique and symbolism that I learned in childhood."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p4"
          defaultMessage="Already at a mature age, I remembered the ability to draw Petrykiv painting. Over time, I created a creative studio 'Zernyatko' in Lviv. My goal became to reproduce the flowering of Petrykivka that I once saw in my childhood. And now, for 12 years, my mission has been to master and popularize the Petrykiv painting. I teach children and adults and continue to study myself."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p5"
          defaultMessage="I use finger painting as art therapy nowadays, as well as drawing small elements with a 'cat' in order to master Ukrainian ethnic calligraphy. All this develops fine motor skills in children and forms creative thinking."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p6"
          defaultMessage="To date, I have had many exhibitions in Ukraine and 16 personal exhibitions abroad, namely in Poland, Spain, France and Turkey."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p7"
          defaultMessage="I work as an art psychologist in Lviv and abroad. Currently, I am working on my 2 manuals about Petrikovsky painting. In addition, several methods with the basics of painting and psychological influence on the development of children's motor skills are being refined. The manuals are intended for the work of teachers and psychologists with art therapy painting, as well as for people who want to master Petrykiv painting without a teacher."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArtist.p8"
          defaultMessage="For almost 350 years of the folk wall painting existence, the Petrykiv painting has turned into an art that has been recognized as an intangible UNESCO heritage. The symbolism and skill of artists is enriched. But the tools and painting techniques still remain primitive, which distinguishes Petrykiv painting from other types of applied art."
        />
      </p>
    </div>
  );
}
