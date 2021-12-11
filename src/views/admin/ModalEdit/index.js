const ModalEdit = (props) => {
  const { editingUser } = props;
  return (
    <div
      class="modal fade bd-example-modal-sm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <p>{editingUser?editingUser.name:"chuaco"}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
