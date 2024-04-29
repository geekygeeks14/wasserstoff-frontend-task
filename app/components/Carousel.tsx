"use client";
import { useState, useEffect } from 'react';

type ImagesProp = string[];

const Index: React.FC<{ images: ImagesProp }> = ({ images }) => {
  let [current, setCurrent] = useState(0);

  //continue looping for the carousal 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="overflow-hidden relative flex justify-center item-center">
        <div
          className={`flex transition ease-out duration-40 w-2/5`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {/* image arrray mapping */}
          {images.map((s, i) => {
            return <img src={s}
              alt="image"
              key={i}
              className={` 
          ${i !== current ? "ml-3 mr-3" : ""
                }`
              }
            />;
          })}
        </div>
      </div>
    </>
  );
};

export default Index; // export this component in the Artist Page.