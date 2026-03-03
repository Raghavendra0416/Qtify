import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import styles from "./Carousel.module.css";
import LeftButton from "../LeftButton/LeftButton";
import RightButton from "../RightButton/RightButton";

function Carousel({ items, renderItem }) {
    const swiperRef = useRef(null);

    return (
        <div className={styles.carouselWrapper}>

            {/* Left button */}
            <LeftButton onClick={() => swiperRef.current?.slidePrev()} />

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 7 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Right button */}
            <RightButton onClick={() => swiperRef.current?.slideNext()} />

        </div>
    );
}

export default Carousel;