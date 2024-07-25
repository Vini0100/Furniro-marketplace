type BalloonProps = {
  discount: number | null;
};

const Balloon: React.FC<BalloonProps> = ({ discount }) => {
  return (
    <>
      {discount !== null ? (
        <span className="font-medium text-base text-white bg-customRed w-12 h-12 rounded-full flex items-center justify-center">
          -{discount ? Math.round(discount * 100) : 0}%
        </span>
      ) : (
        <span className="font-medium text-base text-white bg-customGreen w-12 h-12 rounded-full flex items-center justify-center">
          New
        </span>
      )}
    </>
  );
};

export default Balloon;
