import React, { useState } from "react";
import { Section } from "../Section/Section";

export const HomePage = () => {
  const [carTitle, setCarTitle] = useState("");
  const [sectionId, setSectionId] = useState("")

  return (
    <div>
      this is HomePage
      <Section></Section>
    </div>
  );
};
