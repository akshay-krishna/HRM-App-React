import Button from "../Button/Button";
import DeleteModalIcon from "../Icons/DeleteModalIcon";
import { DeleteModalWrapper } from "./DeleteModalStyled";

const DeleteModal = (dataID: any) => {
  return (
    <DeleteModalWrapper className="flex-column">
      <DeleteModalIcon />
      <h2>Are you sure?</h2>
      <p>
        Do you really want to delete these records? This process cannot be
        undone.
      </p>
      <div className="flex-row confirm-modal-btns">
        {/* <button className="cancel-button" type="button">
          Cancel
        </button> */}
        <Button className="primary flex-row">Cancel</Button>
        <Button className="secondary flex-row">Delete</Button>

        {/* <button className="secondary" type="button">
          Delete
        </button> */}
      </div>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
