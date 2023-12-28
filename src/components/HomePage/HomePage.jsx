import React, { useState } from "react";
import { Section } from "../Section/Section";

export const HomePage = () => {
  const [carTitle, setCarTitle] = useState("Model Y");
  const [subTitle, setSubTitle] = useState("Lease starting at $300/mo*")

  return (
    <div>
      this is HomePage
      <Section carTitle={carTitle} subTitle={subTitle}></Section>
    </div>
  );
};
