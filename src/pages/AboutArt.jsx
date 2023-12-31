import React from "react";

import { FormattedMessage } from "react-intl";

import cityView from "../img/Petrikivka.jpg";
import "./AboutArtStyles.css";

export default function AboutArt() {
  return (
    <div className="aboutart-wrap">
      <h1>
        <FormattedMessage id="aboutArt.header" defaultMessage="Petrykivka" />
      </h1>
      <img src={cityView} alt="Petrykivka" />
      <p>
        <FormattedMessage
          id="aboutArt.p1"
          defaultMessage="Petrykivka’s painting is a characteristic layer of the culture of the Ukrainian nation, recognized around the world as a phenomenon of national thinking and artistic imagination. It originated as a phenomenon 300 years ago in the village of Petrykivka in Dnipro (Eastern Ukraine)."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArt.p2"
          defaultMessage="Petrykivka did not know serfdom. Free Zaporozhye Cossacks lived there. Around the people there were steppe lands, chernozems, rich flora on the Dnieper. Cossacks builtclay houses of clay with roofs made of reeds."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArt.p3"
          defaultMessage="The villagers decorated their windows, doors and walls with flowers, birds, and berries. People had naive faith in their drawings - they were supposed to protect them from ghosts. Over time, this folk art began to develop on porcelain, wooden objects, and book graphics. Over three centuries, thousands of artists perfected their skills, turning the painting of a small village into pan-Ukrainian art. Since 2005, Petrykowski's design has been recognized as UNESCO's intangible heritage."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArt.p4"
          defaultMessage="In Soviet times, the"
        />{" "}
        &quot;
        <FormattedMessage id="aboutArt.factory" defaultMessage="Druzhba" />
        &quot;{" "}
        <FormattedMessage
          id="aboutArt.p5"
          defaultMessage="factory operated in Petrykivka for many years, where a huge number of patterns on a black background were produced for export. Later, Petrykivka returned to the light background. But the crates are still painted on a colored background."
        />
      </p>
      <p>
        <FormattedMessage
          id="aboutArt.p6"
          defaultMessage="Modern Petrykiv painting is a folk art that has unusual ways of drawing. By drawing with fingers, sticks and brushes from cat hair, they create delicate patterns, amazing shapes and fantastic color combinations. Images are transformed into a fabulous world."
        />
      </p>
    </div>
  );
}
