import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Assets } from "../types";
interface Props {
  assets: Assets[];
}

const Slider = ({ assets }: Props) => {
  const [currentMenuItem, setCurrentMenu] = useState(0);
  const prevSlide = () => {
    setCurrentMenu((oldMenu) => {
      const result = (oldMenu - 1 + assets.length) % assets.length;
      return result;
    });
  };
  const nextSlide = () => {
    if (assets.length > 1)
      setCurrentMenu((oldMenu) => {
        const result = (oldMenu + 1) % assets.length;
        return result;
      });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentMenuItem]);

  return (
    <div className="slide-container">
      {assets.map((assetsItem, assetsIndex) => {
        const { path, alt } = assetsItem;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${
                100 * (assetsIndex - currentMenuItem)
              }%)`,
              opacity: assetsIndex === currentMenuItem ? 1 : 0,
              visibility:
                assetsIndex === currentMenuItem ? "visible" : "hidden",
            }}
            key={assetsIndex}
          >
            <img src={`/assets/${path}`} alt={alt} className="slider-image" />
            <p className="slide-title">{alt}</p>
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};
export default Slider;
