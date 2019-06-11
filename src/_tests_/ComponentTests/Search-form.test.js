import React from "react";
import { shallow, mount, render } from "enzyme";
import SearchForm from "../../SearchForm";

// describe what we are testing
describe("Search Field Component", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(<SearchForm />)
        .find("form.searchBookForm") //tests if a form with className searchBookForm exists is rendered on the compoennt
        .exists()
    ).toBe(true);
  });

  it("renders a search input", () => {
    expect(shallow(<SearchForm />).find("#searchField").length).toEqual(1); //looks for a input fiild with a matching. Associates that we are only looking for one.
  });

  describe("search input", () => {
    it("should respond to change event and change the state of the Search Component", () => {
      const wrapper = shallow(<SearchForm />);
      wrapper.find("#searchField").simulate("change", {
        //finds input feild with id "searchField" in the component
        target: { name: "userSearch", value: "48 Laws of Power" } //simulates a change and enters a value for the field using the name of the target
      });

      expect(wrapper.state("userSearch")).toEqual("48 Laws of Power"); //expects the change to have changed state
    });
  });

  describe("Submit button", () => {
    it("should render a submit button", () => {
      expect(shallow(<SearchForm />).find("#SubmitButton").length).toEqual(1);
    });
  });
});
