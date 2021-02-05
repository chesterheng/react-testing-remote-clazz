import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MoviesSpinner from "./MoviesSpinner";

describe("MoviesSpinner component", () => {
  test("should render and test MoviesSpinner component", async () => {
    // 2. Render a component
    render(<MoviesSpinner />);

    // 3. Debug DOM state
    // screen.debug();

    // 4. Test spinner component
    const spinner = screen.getByRole("alert");
    // screen.debug(spinner);
    expect(spinner).toHaveTextContent("Content is loading...");
  });

  test("should render and test MoviesSpinner component snapshot", async () => {
    // 2. Render a component
    const { container } = render(<MoviesSpinner />);

    // 3. Debug DOM state
    // screen.debug();

    // 5. Create a snapshot test
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="spinner-border"
        role="alert"
      >
        <span
          class="sr-only"
        >
          Content is loading...
        </span>
      </div>
    `);
  });
});
