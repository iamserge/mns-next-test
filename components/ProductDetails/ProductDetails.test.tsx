import renderer from "react-test-renderer";
import ProductDetails from "./ProductDetails";

describe("ProductDetails", () => {
  it("renders correctly", () => {
    const product = {
      name: "Test name",
      information: {
        section_title: "test title",
        section_text: "test text"
      },
      image_key:"test.jpg",
      price: {
        current_price: 1,
        original_price: 2
      },
      offer_ids: ["1", "2"]
    };
    const component = renderer.create(<ProductDetails product={product}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
