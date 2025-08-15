import React from 'react';
import nav1 from '../../assets/img/nav1.png';
import nav2 from '../../assets/img/nav2.png';
import nav3 from '../../assets/img/nav3.png';
const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="bg-Primary justify-between flex py-[25px] px-[30px]">
          <div>
            <img src={nav1} alt="img" />
          </div>
          <div>
            <img src={nav2} alt="img" />
          </div>
          <div>
            <img src={nav3} alt="img" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
