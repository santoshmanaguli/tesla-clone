import React from "react";
import styles from "./Section.module.css";
import { Button } from "../Button/Button";

export const Section = (props) => {
  const leftButton = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: "black",
    borderRadius: "5px",
    width: '20%',
    height: '40px',
    fontSize: '16px',
    border: 'none',
    fontWeight: 500,
  };

  const rightButton = {
    backgroundColor: 'rgba(34, 34, 34, 0.64)',
    color: "#fff",
    borderRadius: "5px",
    width: '20%',
    height: '40px',
    fontSize: '16px',
    border: 'none',
    fontWeight: 500,
  };

  return (
    <section className={styles.container} id={props.sectionId}>
      <h1 className={styles.carTitle}>{props.carTitle}</h1>
      <p>{props.subTitle}</p>
      <div className={styles.btnsStyle}>
        <div className={styles.btnDiv}>
          <Button styles={leftButton} btnName="Explore Inventory"></Button>
          <Button styles={rightButton} btnName="Demo Drive"></Button>
        </div>
        <p className={styles.termsAndConditionStyle}>
          *Excludes taxes and fees with price subject to change. Available in
          select states.
          <a className={styles.detailsList}>&nbsp;See Details</a>
        </p>
      </div>
    </section>
  );
};
