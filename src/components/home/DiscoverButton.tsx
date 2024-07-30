type DiscoverButtonProps = {
  handleClickNavigate: () => void;
};

const DiscoverButton = ({ handleClickNavigate }: DiscoverButtonProps) => {
  return (
    <button
      className="bg-customGold text-white font-bold text-base px-[4.5rem] py-[1.56rem]"
      onClick={handleClickNavigate}
    >
      BUY Now
    </button>
  );
};

export default DiscoverButton;
