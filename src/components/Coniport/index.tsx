import React from 'react';
import Marquee from 'react-fast-marquee';
import COINPORT1 from '../../assets/img/COINPORT.png';
import COINPORT2 from '../../assets/img/COINPORT2.png';
const COINPORT: React.FC = () => {
  return (
    <div className="bg-Three">
      {/* Top images */}
      <div className="flex justify-between items-center py-[23px] px-[30px]">
        <div>
          <img src={COINPORT1} alt="img" />
        </div>
        <div>
          <img src={COINPORT2} alt="img" />
        </div>
      </div>

      <div className="w-full bg-white h-[1px]"></div>

      {/* Marquee / Scrolling text */}
      <div className="bg-black py-4 px-[10px]">
        <Marquee gradient={false} speed={50}>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
          <span className="font-Megaton text-white text-[24px] font-normal mx-8">
            NEW COLLECTION
          </span>
        </Marquee>
      </div>
      <div className="w-full bg-white h-[1px]"></div>
    </div>
  );
};

export default COINPORT;
