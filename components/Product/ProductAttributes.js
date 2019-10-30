import React, { useState } from "react";
import { Header, Button, Modal } from "semantic-ui-react";

function ProductAttributes({ description }) {
  const [modal, setModal] = useState(false);

  function handleDelete() {}

  return (
    <>
      <Header as="h3">About this Product</Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        color="red"
        content="Delete Product"
        onClick={() => setModal(!modal)}
      />
      <Modal open={modal} dimmer="blurring">
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to Delete?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" onClick={() => setModal(false)} />
          <Button
            icon="trash"
            negative
            labelPosition="right"
            content="Delete"
            onClick={handleDelete}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
