import React from 'react';
interface img {
  img: string;
}

const RamingIMgCard: React.FC<img> = ({ img }) => {
  return (
    <div>
      <div>
        <div className="h-[526px] rounded overflow-hidden relative">
          <img src={img} alt="img" className="w-full h-full object-cover" />

          <div className="bg-orange-700 absolute bottom-0 left-0 w-full flex justify-between px-[10px] py-4">
            <span>Buy mint</span>
            <span>20 sol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamingIMgCard;
