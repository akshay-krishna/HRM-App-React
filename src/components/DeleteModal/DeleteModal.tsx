import Button from "../Button/Button";
import DeleteModalIcon from "../Icons/DeleteModalIcon";
import { DeleteModalWrapper, Overlay } from "./DeleteModalStyled";

const DeleteModal = ({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) => {
  return (
    <Overlay>
      <DeleteModalWrapper className="flex-column ">
        <DeleteModalIcon />
        <h2>Are you sure?</h2>
        <p>
          Do you really want to delete these records? This process cannot be
          undone.
        </p>
        <div className="flex-row confirm-modal-btns">
          <Button className="primary delete-btns" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button className="secondary delete-btns">Delete</Button>
        </div>
      </DeleteModalWrapper>
    </Overlay>
  );
};

export default DeleteModal;
