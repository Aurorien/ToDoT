import { Plus } from "lucide-react";
import "./AddButton.css";

interface AddButtonProps {
  onClick: () => void;
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <section className="add-button">
      <Plus onClick={() => onClick()} />
    </section>
  );
}

export default AddButton;
