import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import ReuseableForm from "./App";

const handleSubmit = jest.fn();

const theForm = (
  <ReuseableForm onSubmit={handleSubmit}>
    {handleChange => (
      <React.Fragment>
        <fieldset>
          <legend>Street address</legend>
          <input name="address" type="text" onChange={handleChange} />
        </fieldset>
        <fieldset>
          <legend>Postal code</legend>
          <input name="postal-code" type="number" onChange={handleChange} />
        </fieldset>
      </React.Fragment>
    )}
  </ReuseableForm>
);

const wrapper = mount(theForm);

describe("the <ReuseableForm /> component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(theForm).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("renders the children", () => {
  expect(wrapper.contains(theForm)).toBe(true);
});
it("handles a change", () => {
  const inputName = "address";
  const inputValue = "EPFL Innovation Park, Building E";
  wrapper.find(`input[name='${inputName}']`).simulate("change", {
    target: { name: inputName, value: inputValue }
  });
  expect(wrapper.state(inputName)).toBe(inputValue);
});
