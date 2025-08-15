import React from 'react';

const BannarFooter: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mt-[156px]">
          <div>
            <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              EVO
            </span>{' '}
            <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              Alpha
            </span>
            <div>
              <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                VERS
              </span>{' '}
              <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                01.08.84
              </span>
            </div>
          </div>
          <div>
            <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              74.906
            </span>{' '}
            <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
              LOG
            </span>
            <div>
              <span className="text-secondary font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                win11 Chrome/138.0.0.0
              </span>{' '}
              <span className="text-white font-Orbitron text-[8px] font-normal leading-[24px] capitalize">
                sYS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannarFooter;
