import React from 'react';
import len1 from '../../../assets/img/len1.png';
import len2 from '../../../assets/img/len2.png';
import len3 from '../../../assets/img/len3.png';
import len4 from '../../../assets/img/len4.png';
import man from '../../../assets/img/man.png';

interface BoardItem {
  id: number;
  img: string;
  value: number;
  sol?: number;
}

const boardData: BoardItem[] = [
  { id: 1, img: len1, value: 17 },
  { id: 2, img: len2, value: 15, sol: 30 },
  { id: 3, img: len3, value: 8, sol: 25 },
  { id: 4, img: len4, value: 11, sol: 25 },
];

const BoardCard: React.FC = () => {
  return (
    <div className="bg-Primary w-[1170px] py-[37px] px-[43px] mx-auto rounded-[11px]">
      <div className="grid grid-cols-3 text-center gap-y-[37px]">
        {boardData.map(item => (
          <React.Fragment key={item.id}>
            {/* Image Column */}
            <div className="flex justify-start">
              <img src={item.img} alt={`len-${item.id}`} />
            </div>

            {/* Value + Man Column */}
            <div className="flex items-center justify-center gap-x-[12px]">
              <h2 className="text-white font-Press text-[18px] uppercase">
                {item.value}
              </h2>
              <img src={man} alt="manImg" />
            </div>

            {/* SOL Column */}
            <div className="flex items-center justify-end gap-x-[8px]">
              {item.sol && (
                <>
                  <span className="text-white font-Press text-[18px] uppercase">
                    {item.sol}
                  </span>
                  <span className="text-white font-Press text-[18px] uppercase">
                    SOL
                  </span>
                </>
              )}
            </div>

            {/* Divider (Full Row) */}
            <div className="col-span-3 w-full h-[4px] bg-Four mt-[20px]"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardCard;
