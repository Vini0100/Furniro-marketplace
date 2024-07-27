type PropsButton = {
  children: string;
  onClick: () => void;
};

const CheckoutBtn = ({ children, onClick }: PropsButton) => {
  return (
    <button
      onClick={onClick}
      className="text-nowrap border rounded-xl border-black px-[3.75rem] py-[0.875rem]"
    >
      {children}
    </button>
  );
};

export default CheckoutBtn;
