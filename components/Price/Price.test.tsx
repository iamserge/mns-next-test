import renderer from "react-test-renderer";
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import Price from "./Price";

describe("Header", () => {
  afterEach(cleanup);
  it('renders regular price in GBP correctly', () => {
      const price = { 
        currency_code: "GBP",
        current_price: 200,
      }
      const { getByText } = render(<Price price={price} />);
      expect(getByText(/£/i)).toBeTruthy();
      expect(getByText(/200/i)).toBeTruthy();
  });
  it('renders offer price in GBP correctly', () => {
    const price = { 
      currency_code: "GBP",
      current_price: 200,
      original_price: 100
    }
    const { getByText,queryAllByText } = render(<Price price={price} />);
    expect(queryAllByText(/£/i)).toBeTruthy();
    expect(getByText(/200/i)).toBeTruthy();
    expect(getByText(/100/i)).toBeTruthy();
  });
  it('renders regular price in EUR correctly', () => {
    const price = { 
      currency_code: "EUR",
      current_price: 200,
    }
    const { getByText } = render(<Price price={price} />);
    expect(getByText(/€/i)).toBeTruthy();
    expect(getByText(/200/i)).toBeTruthy();
  });
  it('renders offer price in EUR correctly', () => {
    const price = { 
      currency_code: "EUR",
      current_price: 200,
      original_price: 100
    }
    const { getByText,queryAllByText } = render(<Price price={price} />);
    expect(queryAllByText(/€/i)).toBeTruthy();
    expect(getByText(/200/i)).toBeTruthy();
    expect(getByText(/100/i)).toBeTruthy();
  });
});

