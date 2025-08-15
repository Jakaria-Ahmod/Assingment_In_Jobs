import React from 'react';

import BannarFooter from './components/BannarFooter';
import BannerBody from './components/BannerBody';
import BannerHeding from './components/BannerHeding';
const Baneer: React.FC = () => {
  return (
    <div>
      <div className="bg">
        <div className="w-[1147px] mx-auto pt-[97px]">
          <BannerHeding></BannerHeding>
          <BannerBody></BannerBody>
          <BannarFooter></BannarFooter>
        </div>
      </div>
    </div>
  );
};

export default Baneer;
