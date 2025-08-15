import React from 'react';
import RamingIMgCard from '../../GlobalComponents/RamingIMgCard';
import { RamingApi } from './components/RaminginApi';

const Remining: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[20px] px-[23px] bg-Three py-[16px]">
        {RamingApi.map(item => (
          <div key={item?.id}>
            <RamingIMgCard img={item?.img}></RamingIMgCard>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default Remining;
