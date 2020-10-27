import renderer from "react-test-renderer";
import ProductImage from "./ProductImage";

describe("ProductImage", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ProductImage offers={["1", "2"]} name="test" image_key="123" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
