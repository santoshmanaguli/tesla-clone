import React from "react";
import styles from './Section.module.css'
import Button from '../Button/Button'

export const Section = (props) => {
  return(
    <section className={styles.container} id={props.sectionId}>
      <h1 className={styles.carTitle}>
        {props.carTitle}
      </h1>
      <p>
        {props.subTitle}
      </p>
      <Button>

      </Button>
    </section>
  )
}