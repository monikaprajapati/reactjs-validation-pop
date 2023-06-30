import * as React from "react";
import { shallow } from "enzyme";
import ErrorModal from "./ErrorModal";

describe("ErrorModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ErrorModal errorText={undefined} onClose={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
