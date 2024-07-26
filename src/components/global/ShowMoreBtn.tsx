import React from "react";

interface ShowMoreBtnProps {
  handleClick: () => void;
}

const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="py-3 px-[4.625rem] text-customGold font-semibold text-base border border-customGold"
    >
      Show More
    </button>
  );
};

export default ShowMoreBtn;
