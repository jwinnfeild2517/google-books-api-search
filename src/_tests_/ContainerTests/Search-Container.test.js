import React from "react";
import { shallow, mount, render } from "enzyme";

import SearchContainer from "../../Containers/SearchContainer";
import SearchForm from "../../Components/SearchForm";

describe("Search Container", () => {
  it("should render without throwing an error", () => {
    shallow(<SearchContainer />);
  });

  it("should should have the specified initial state", () => {
    expect(shallow(<SearchForm />).state()).toEqual({ books: [] });
  });

  it("should render a search Form on the page", () => {
    expect(
      mount(<SearchContainer />)
        .find(SearchForm)
        .exists()
    ).toBe(true);
  });

  it("should render the Search Form Component with specific props", () => {
    expect(
      mount(<SearchContainer />)
        .find(SearchForm)
        .props()
    ).toEqual({
      formSubmit: expect.any(Function)
    });
  });

  it("it should render a bookTile", () => {});
});
