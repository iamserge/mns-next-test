import renderer from "react-test-renderer";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Layout><span>test</span></Layout>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
