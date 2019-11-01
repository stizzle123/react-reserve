import { Button, Segment, Divider } from "semantic-ui-react";
import numberFormat from "../../utils/numberFormat";

function CartSummary() {
  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub Total:</strong> {numberFormat(0)}
        <Button icon="cart" floated="right" color="teal" content="Checkout" />
      </Segment>
    </>
  );
}

export default CartSummary;
