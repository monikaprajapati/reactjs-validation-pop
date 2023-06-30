import * as React from "react";
import { shallow } from "enzyme";
import UsersList from "./UsersList";

describe("UsersList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UsersList userList={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});
