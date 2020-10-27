import renderer from "react-test-renderer";
import ProductTile from "./ProductTile";

describe("ProductTile", () => {
  it("renders correctly", () => {
    const product = {
      "id": "97",
      "name": "Pure Cotton Scoop Neck Vest Top",
      "image_key": "SD_01_T41_1391_B0_X_EC_0",
      "price": {
        "current_price": 450,
        "original_price": null,
        "currency_code": "GBP"
      },
      "offer_ids": [
        "4",
        "5"
      ]
    }
    const component = renderer.create(<ProductTile product={product} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
