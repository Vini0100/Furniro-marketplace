type PropButton = {
  children: string;
  onClick?: () => void;
};

const ButtonCart = ({ children, onClick }: PropButton) => {
  return (
    <button
      className="font-poppins text-xs py-[0.375rem] px-7 border rounded-3xl border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonCart;
