import React from 'react';

const Footer: React.FC = () => {
  const DateINYear = new Date().getFullYear();
  return (
    <div>
      <div className="w-full h-[1px] bg-[#292929]"></div>
      <footer className="py-[23px] bg-Three ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#95FF00] font-Voltec text-[15px] font-normal leading-[19px] uppercase">
                {' '}
                /{' '}
              </span>{' '}
              <span className="text-[#DCDCDC] font-Voltec text-[15px] font-normal leading-[19px] uppercase">
                © WEBTHREE {DateINYear}
              </span>
            </div>
            <div>
              <div>
                <span className="text-[#95FF00] font-Voltec text-[15px] font-normal leading-[19px] uppercase">
                  / {''}
                </span>
                <span className="text-[#DCDCDC] font-Voltec text-[15px] font-normal leading-[19px] uppercase">
                  ALL RIGHTS RESERVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
