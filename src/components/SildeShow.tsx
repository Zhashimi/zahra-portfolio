import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Assets } from "../types";
interface Pops {
  assets: Assets[] | undefined;
}
const SlideShow = ({ assets }: Pops) => {
  return (
    <Slide
      autoplay={true}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
    >
      {assets?.map((image, index) => {
        return (
          <div className="each-slide-effect" key={index}>
            <img
              key={index}
              src={`/assets/${image.path}`}
              alt={image.alt}
              className="modal-image"
            />
            <p>{image.alt}</p>
          </div>
        );
      })}
    </Slide>
  );
};

export default SlideShow;
