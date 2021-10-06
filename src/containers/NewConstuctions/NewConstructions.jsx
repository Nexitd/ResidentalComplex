import React, { useState } from "react";
import { Select, Row } from "antd";
import Footer from "../../components/Footer";
import ResCard from "../../components/Card";
import styles from "./NewConstructions.module.css";

const NewConstructions = () => {
  const { Option } = Select;
  const [filters, setFilters] = useState({
    city: [],
    district: [],
  });

  const children = [1, 2, 4, 5, 6, 7];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} values={children[i.toString(36) + i]}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const filterCards = () => {
    console.log(filters.city.toString(), filters.district.toString());
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h2 className={styles.headTitle}>Новостройки</h2>
        <div className={styles.containerFilters}>
          <div className={styles.filters} >
            <div className={styles.filtersItem}>
              <p className={styles.text}>Продажа</p>
            </div>
            <div className={styles.filtersItem}>
              <Select
                mode='multiple'
                onChange={(value) =>
                  setFilters({ ...filters, city: value })
                }
                allowClear
                style={{ width: "100%", height: "100%" }}
                placeholder='Город'>
                {children}
              </Select>
            </div>
            <div className={styles.filtersItem}>
              <Select
                mode='multiple'
                allowClear
                onChange={(value) =>
                  setFilters({ ...filters, district: value })
                }
                style={{ width: "100%", height: "100%" }}
                placeholder='Район, микрорайон'>
                {children}
              </Select>
            </div>
          </div>
          <button className={styles.searchCards} onClick={filterCards} >
            Найти
          </button>
        </div>
      </div>
      <div className={styles.containerBody}>
        <div className={styles.bodyContainer}>
          <Row gutter={[30, 30]} justify='center' wrap={true}>
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewConstructions;
