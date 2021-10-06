import React from "react";
import className from "classnames"
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCont}>
        <p className={styles.text}>Контакты</p>
        <p className={className([styles.text, styles.adress])}>ул. Профсоюзная, д. 55</p>
        <a href="tel:+74993218888" className={className([styles.text, styles.phone])}>+7(499)-321-88-88 </a>
      </div>
    </div>
  );
};

export default Footer;
