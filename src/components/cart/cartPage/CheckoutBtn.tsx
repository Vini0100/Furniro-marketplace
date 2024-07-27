type PropsButton = {
  children: string;
  onClick?: () => void;
};

const CheckoutBtn = ({ children, onClick }: PropsButton) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-nowrap border rounded-xl border-black px-[3.75rem] py-[0.875rem] font-poppins"
    >
      {children}
    </button>
  );
};

export default CheckoutBtn;
