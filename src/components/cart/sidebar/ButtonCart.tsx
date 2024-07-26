type PropButton = {
  children: string;
};

const ButtonCart = ({ children }: PropButton) => {
  return (
    <button className="font-poppins text-xs py-[0.375rem] px-7 border rounded-3xl border-black">
      {children}
    </button>
  );
};

export default ButtonCart;
