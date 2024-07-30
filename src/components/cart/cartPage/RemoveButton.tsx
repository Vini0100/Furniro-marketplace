import { RiDeleteBin7Fill } from "react-icons/ri";

interface RemoveButtonProps {
  handleRemoveToCart: () => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ handleRemoveToCart }) => {
  return (
    <RiDeleteBin7Fill
      data-testid="removeProductsButton"
      onClick={() => handleRemoveToCart()}
      className="text-customGold cursor-pointer size-7"
    />
  );
};

export default RemoveButton;
