import { fetchAPI } from "./index";
import { getProducts, getProduct } from './products';
import { getUser } from "./user";
import {LOCAL_URL} from '../utils/constants';
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({data: {productList: [{name:"test"}]}}),
  })
);

describe("Api", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it("fires fetch", async () => {
    const fetchCall = await fetchAPI("query", false);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it("fires local fetch", async () => {
    const fetchCall = await fetchAPI("query", true);
    expect(fetch).toHaveBeenCalledWith(LOCAL_URL, {"body": "{\"query\":\"query\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"});
  });
  it("getProducts call fires correctly", async () => {
    const products = await getProducts();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(products.length).toBe(1)
  });
  it("getProduct call fires correctly", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({data: {product: {name:"test"}}}),
      })
    );
    const product = await getProduct(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(product.name).toBe("test")
  });
  it("getUser call fires correctly", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({data: {user: {id:"test", offers: [], available_badges: "test:test,test" }}}),
      })
    );
    const user = await getUser("4");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(user.userOffers)).toBe("{}")
  });
});
