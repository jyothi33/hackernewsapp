import { shallow } from "enzyme";
import Story from "../components/Story";
import React from "react";

describe("Story Component", () => {
  it("It should render Story Component", () => {
    const component = shallow(<Story />);
    console.log(component.debug());
    const wrapper = component.find(`[data-test='story']`);
    expect(wrapper.length).toBe(1);
  });
});
