import React from 'react';
import button from '../../../assets/img/Button.png';
const BannerBody: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center mt-[150px]">
          <div>
            <span>
              <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                ///:
              </span>
              <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                0.20
              </span>
            </span>
          </div>
          <div className="text-center w-[813px]">
            <h1 className="font-Atomos text-white text-[84px]  leading-[80px] capitalize">
              EXPLORE NFT COLLECTION
            </h1>
            <h2 className="text-white font-Voltec text-[28px] leading-[30px] mt-[23px]">
              A collection of 2525 highly-fashionable NFTs on the ETH
              Blockchain. Unique, metaverse-ready, and designed to benefit their
              holders.
            </h2>
            <div className="mx-auto block mt-[48px]">
              <img src={button} alt="img" className="mx-auto cursor-pointer" />
            </div>
          </div>
          <div>
            <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              0.49{' '}
            </span>{' '}
            <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              :\\\
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBody;
