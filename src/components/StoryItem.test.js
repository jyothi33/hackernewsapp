import { shallow } from "enzyme";
import StoryItem from "../components/StoryItem";

import { findByTestattr } from "../utils";

const setUp = (props = {}) => {
  const component = shallow(<StoryItem {...props} />);
  return component;
};

describe("StoryItem Component", () => {
  let component;

  describe("StoryItem Component with props", () => {
    beforeEach(() => {
      const props = {
        detail: [1],
      };
      component = setUp(props);
    });
    it("It should render StoryItem Component with props", () => {
      const wrapper = findByTestattr(component, "storyitem");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("StoryItem Component without props", () => {
    beforeEach(() => {
      component = setUp();
    });
    it("It should render StoryItem Component without props", () => {
      const wrapper = findByTestattr(component, "storyitem");
      expect(wrapper.length).toBe(0);
    });
  });
});
