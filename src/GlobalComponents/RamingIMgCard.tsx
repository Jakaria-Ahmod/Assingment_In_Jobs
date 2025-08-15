import React from 'react';
interface img {
  img: string;
}

const RamingIMgCard: React.FC<img> = ({ img }) => {
  return (
    <div>
      <div>
        <div className="h-[526px] rounded overflow-hidden">
          <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default RamingIMgCard;
