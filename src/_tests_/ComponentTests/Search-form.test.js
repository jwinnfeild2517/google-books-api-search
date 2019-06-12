import React from "react";
import { shallow, mount, render } from "enzyme";
import SearchForm from "../../Components/SearchForm";

// describe what we are testing
describe("Search Field Component", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    shallow(<SearchForm />);
  });

  // check for the intial state when the component renders
  it("should should have the specified initial state", () => {
    expect(shallow(<SearchForm />).state()).toEqual({ userSearch: null });
  });

  //tests if a form with className searchBookForm exists is rendered on the compoennt
  it("should render a form", () => {
    expect(
      shallow(<SearchForm />)
        .find("form.searchBookForm")
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

    // it("should invoke the onSubmit function from props when clicked", () => {
    //   const wrapper = mount(<SearchForm />);
    //   wrapper.find("#SubmitButton").simulate("click");
    //   expect(onClick).toHaveBeenCalled();
    // });
  });
});
