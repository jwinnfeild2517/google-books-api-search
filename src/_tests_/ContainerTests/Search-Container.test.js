import React from "react";
import { shallow, mount, render } from "enzyme";
import SearchContainer from "../../Containers/SearchContainer";

describe("Search Container", () => {
  it("should render without throwing an error", () => {
    shallow(<SearchContainer />);
  });
});
