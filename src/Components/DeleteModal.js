import "./Styles/DeleteModal.scss";

const DeleteModal = ({ setDeleting, deleteComment, setDeleteModalState }) => {
  const cancelDelete = () => {
    setDeleting(false);
    setDeleteModalState(false);
  };

  const deleteBtnClick = () => {
    deleteComment();
  };

  return (
    <div className="delete-confirmation-wrapper">
      <div className="delete-container">
        <div className="title">Delete comment</div>
        <div className="confirmation-message">
          Are you sure?
        </div>
        <div className="btn-container">
          <button className="cancel-btn" onClick={cancelDelete}>
            No, cancel
          </button>
          <button className="delete-btn" onClick={deleteBtnClick}>
            Yes, delete
          </button>
        </div>
        ddff
      </div>
    </div>
  );
};

export default DeleteModal;
