import { shallow } from "enzyme";
import App from "./App";

describe("Story Component", () => {
  it("It should render App Component", () => {
    const component = shallow(<App />);
    console.log(component.debug());
    const wrapper = component.find(`[data-test='app']`);
    expect(wrapper.length).toBe(1);
  });
});
