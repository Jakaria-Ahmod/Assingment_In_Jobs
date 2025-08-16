import React from 'react';
import { manunalImgApi } from './components/Api';
import BoardCard from './components/BoardCard';

const Leage: React.FC = () => {
  return (
    <div className="py-[74px] bg-Three">
      <div>
        <h2 className="text-white font-Atomos text-[96px] font-normal text-center">
          The LEAGUE
        </h2>
        <div>
          <BoardCard></BoardCard>
        </div>
        <div className="my-[118px] px-[10px] flex items-center gap-x-[26px] justify-between">
          {manunalImgApi.map(item => (
            <div key={item.id}>
              <div className="w-[145px] h-[125px]">
                <img
                  src={item?.img}
                  alt="pizza1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leage;
