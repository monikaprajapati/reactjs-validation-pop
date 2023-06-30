import * as React from "react";
import { shallow } from "enzyme";
import AddUser from "./AddUser";

describe("AddUser", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddUser onAddUser={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
