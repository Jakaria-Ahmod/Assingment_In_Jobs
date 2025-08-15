import React from 'react';

const BannerHeding: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              DSP:
            </span>{' '}
            <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              1707 x 979
            </span>
            <div>
              <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                FPS:
              </span>{' '}
              <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                67.90
              </span>
            </div>
          </div>
          <div>
            <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              10-08-2025 :
            </span>{' '}
            <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              DATE
            </span>
            <div>
              <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                02:56:20 :
              </span>{' '}
              <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                TIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeding;
