import { Item, Label } from "semantic-ui-react";
import AddProductToCart from "./AddProductToCart";
import numberFormat from "../../utils/numberFormat";

function ProductSummary({ name, price, _id, mediaUrl, sku }) {
  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image src={mediaUrl} size="medium" />
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Description>
              <p>{numberFormat(price)}</p>
              <Label>SKU: {sku}</Label>
            </Item.Description>
            <Item.Extra>
              <AddProductToCart productId={_id} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );
}

export default ProductSummary;
