import React, { useState, useEffect } from "react";
import { Button, Segment, Divider } from "semantic-ui-react";
import StripeCheckout from "react-stripe-checkout";
import numberFormat from "../../utils/numberFormat";
import calculateCartTotal from "../../utils/calculateCartTotal";

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);
  const [isCartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub Total:</strong> {numberFormat(cartAmount)}
        <StripeCheckout
          name="React Reserve"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          billingAddress={true}
          shippingAddress={true}
          zipCode={true}
          currency="USD"
          token={handleCheckout}
          triggerEvent="onClick"
          stripeKey="pk_test_0Nn0NS1r5BUKQwHhOHXXcRoR00VpJqAuj9"
        >
          <Button
            disabled={isCartEmpty || success}
            icon="cart"
            floated="right"
            color="teal"
            content="Checkout"
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
