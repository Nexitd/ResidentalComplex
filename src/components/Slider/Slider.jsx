import React from "react";
import { Carousel } from "antd";
import img from "../../assets/images/FullBuilding/Rectangle 68.jpg";
import left from "../../assets/images/FullBuilding/free-icon-right-arrow-271228 1.svg";
import right from "../../assets/images/FullBuilding/free-icon-right-arrow-271228 2.svg";
import styles from "./Slider.module.css";

const Slider = () => {
	function onChange(a, b, c) {
		console.log(a, b, c);
	}

	return (
		<Carousel
			afterChange={onChange}
			arrows={true}
			prevArrow={<img src={right} alt="" />}
			nextArrow={<img src={left} alt="" />}
			className={styles.slider}
		>
			<div>
				<img src={img} alt="" className={styles.carouselImg} />
			</div>
			<div>
				<img src={img} alt="" className={styles.carouselImg} />
			</div>
			<div>
				<img src={img} alt="" className={styles.carouselImg} />
			</div>
			<div>
				<img src={img} alt="" className={styles.carouselImg} />
			</div>
		</Carousel>
	);
};

export default Slider;
