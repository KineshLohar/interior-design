"use client";
import { MoveRight } from "lucide-react";
import { useState, useRef, useEffect, useId } from "react";

interface SlideData {
  client: string;
  location: string;
  feedback: string;
  image: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  onClick: (index: number) => void;
}

const Slide = ({ slide, index, current, onClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  // Parallax “mouse‐move” effect:
  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // Fade in the image once it loads:
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div className="[perspective:1200px]">
      <li
        ref={slideRef}
        className="relative w-[70vmin] h-[70vmin] flex-shrink-0 mx-[4vmin] text-white cursor-pointer select-none "
        onClick={() => onClick(index)}
        // onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
       {current === index && <div className="absolute z-10 inset-x-0 inset-y-1/3 bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />} 
        <div
          className="absolute inset-0 rounded-[1%] overflow-hidden bg-gray-800"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            src={slide.image}
            alt={`Testimonial from ${slide.client}`}
            onLoad={onImageLoad}
            loading="eager"
            decoding="sync"
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-0 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
          />

          {/* Dark overlay only on the active slide */}
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        {/* Textual Content */}
        <div
          className={`absolute z-20 inset-0 flex flex-col justify-end p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Feedback Text */}
          <p className="text-base md:text-lg lg:text-2xl font-medium leading-snug">
            “{slide.feedback}”
          </p>

          {/* Client Info */}
          <div className="relative mt-4 flex items-center space-x-3">
            <div className="text-left">
              <h3 className="text-sm md:text-lg font-semibold">
                {slide.client}
              </h3>
              <p className="text-xs md:text-sm text-gray-200">
                {slide.location}
              </p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const CarouselControl = ({ direction, onClick }: CarouselControlProps) => {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      title={isPrev ? "Go to previous slide" : "Go to next slide"}
      className={`
        w-10 h-10 flex items-center justify-center bg-transparent dark:bg-neutral-800 
        border border-transparent rounded-full  
        transition duration-200
        cursor-pointer
        ${isPrev ? "rotate-180" : ""}`}
    >
      <MoveRight className="text-neutral-600 dark:text-neutral-200 w-10 h-10" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  // Wrap around infinitely
  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const jumpTo = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div className="reveal relative mt-16 w-[90vw] h-[75dvw] sm:w-[70vmin] sm:h-[70vmin] mx-auto " aria-labelledby={`carousel-heading-${id}`}>
      {/* -------------- SLIDES WRAPPER -------------- */}
      <ul
        className="absolute top-0 left-0 flex mx-[-4vmin] transition-transform duration-1000 ease-in-out overflow-hidden"
        style={{
          // translateX by a percentage so that the “current” slide is centered
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <Slide
            key={idx}
            slide={slide}
            index={idx}
            current={current}
            onClick={jumpTo}
          />
        ))}
      </ul>

      {/* -------------- ARROWS -------------- */}
      <div className="absolute top-[calc(100%+3rem)] left-0 w-full flex justify-between px-4 transform -translate-y-1/2">
        <CarouselControl direction="prev" onClick={goPrev} />
        <CarouselControl direction="next" onClick={goNext} />
      </div>

      {/* -------------- DOT INDICATORS -------------- */}
      <div className="absolute bottom-[calc(-3.5rem)] left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`
              w-3 h-3 rounded-full transition-all duration-200 
              ${idx === current ? "bg-white scale-125" : "bg-neutral-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
