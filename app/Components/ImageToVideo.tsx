"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Define the structure for a single image and video object
interface ImageSourceType {
  imgUrl: string;
  videoUrl: string;
  alt: string;
}

// Define the props structure for the component
interface ImageToVideoProps {
  imageSource: ImageSourceType[];
}

// Correctly define the component using React.FC and the proper prop types
const ImageToVideo: React.FC<ImageToVideoProps> = ({ imageSource }) => {
  return (
    <div className="flex flex-col absolute top-0  right-32 gap-6 justify-between">
      {imageSource.map((image, i) => (
        <div key={i} className="relative w-48 h-72 rounded-xl overflow-hidden">
          <motion.div
            initial={{ opacity: 1, y: -288 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            whileHover={{ opacity: 0 }}
            className="w-full h-full absolute top-0 z-10"
          >
            <Image
              src={image.imgUrl}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -288 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="w-full h-full absolute top-0"
          >
            <video
              src={image.videoUrl}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageToVideo;
