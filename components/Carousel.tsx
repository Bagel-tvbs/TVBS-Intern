// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type CarouselProps = {
  images: string[];
};
export default function Carousel({ images }: CarouselProps) {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full md:w-[600px] h-[1000px] md:h-[600px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full mt-14"
            width={800}
            height={800}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
