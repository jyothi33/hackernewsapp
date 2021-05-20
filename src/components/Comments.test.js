import { shallow } from "enzyme";
import { findByTestattr } from "../utils";
import Comment from "./Comment";

const setUp = (props = {}) => {
  const component = shallow(<Comment {...props} />);
  return component;
};

describe("Comment Component", () => {
  let component;

  describe("Comment Component with props", () => {
    beforeEach(() => {
      const props = {
        id: [1],
      };
      component = setUp(props);
    });
    it("It should render Comment Component with props", () => {
      const wrapper = findByTestattr(component, "comment");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Comment Component without props", () => {
    beforeEach(() => {
      component = setUp();
    });
    it("It should render Comment Component without props", () => {
      const wrapper = findByTestattr(component, "comment");
      expect(wrapper.length).toBe(0);
    });
  });
});
