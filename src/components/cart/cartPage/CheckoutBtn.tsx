type PropsButton = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
};

const CheckoutBtn = ({ children, onClick, disabled }: PropsButton) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`text-nowrap border rounded-xl border-black px-[3.75rem] py-[0.875rem] font-poppins ${
        disabled && "bg-customRed border-none text-white cursor-not-allowed"
      }`}
    >
      {children}
    </button>
  );
};

export default CheckoutBtn;
