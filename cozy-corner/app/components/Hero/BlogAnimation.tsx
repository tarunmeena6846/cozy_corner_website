import { Player, Controls } from "@lottiefiles/react-lottie-player";
import blobAnimation from "./blob-animation.json"; // Download and save the JSON file locally

const BlobAnimation = () => {
  return (
    <div className=" ">
      <Player
        loop
        autoplay
        src={blobAnimation}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BlobAnimation;
