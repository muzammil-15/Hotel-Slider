import React from "react";
import Slider from "react-slick";
import "./App.css";
import BasicCard from "./Card";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function App() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        REACT-SLICK CAROUSEL
      </h1> */}

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>

      <div className="arrows">
        <div
          className="btn"
          
        >
          <LuChevronLeft color="yellow" size={40} onClick={() => slider?.current?.slickPrev()}/>
        </div>
        <div
        className="btn"
          onClick={() => slider?.current?.slickNext()}
        >
          <LuChevronRight color="yellow" size={40} />
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    title: "Find The Best Hotel For Accommodation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5SfbBR8vuJIzhTPT-o0rXlmI0BbEFSlbtcoaAq9m1A&s",
  },
  {
    id: 2,
    title: "Find The Best Hotel For Accommodation 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaKPn4YCa6ydUli_yK1Nzw3fWw_Rv2RpjmxA_axE18g&s",
  },
  {
    id: 3,
    title: "Find The Best Hotel For Accommodation 3",
    image: "https://image-tc.galaxy.tf/wijpeg-9vualzt3dbue0hi00ba4q49ub/chatwalhotelnyc-c-004-build-crop.jpg?width=1920",
  }
];
