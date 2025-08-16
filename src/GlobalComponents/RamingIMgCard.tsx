import React from 'react';

interface ImgProps {
  img: string;
}

const RamingImgCard: React.FC<ImgProps> = ({ img }) => {
  return (
    <div className="group">
      <div className="h-[526px] rounded overflow-hidden relative">
        <img src={img} alt="img" className="w-full h-full object-cover" />

        <div className="bg-Four cursor-pointer absolute bottom-0 left-0 w-full flex justify-between px-[10px] py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-Atomos text-base font-normal leading-[24px] capitalize">
            Buy mint
          </span>
          <span className="text-white font-Atomos text-base font-normal leading-[24px] capitalize">
            20 sol
          </span>
        </div>
      </div>
    </div>
  );
};

export default RamingImgCard;
