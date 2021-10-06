import React from "react";
import { Col } from "antd";
import { useHistory } from "react-router-dom";
import styles from "./Card.module.css";

const ResCard = ({ image, title }) => {
  const history = useHistory();

  const changeRoute = () => {
    history.push("/complex")
  }

  return (
    <Col span={6}>
      <div className={styles.resCard} onClick={changeRoute}>
        <img
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
        <div className={styles.body}>
          <p className={styles.text}>ЖК Высота</p>
        </div>
      </div>
    </Col>
  );
};

export default ResCard;
