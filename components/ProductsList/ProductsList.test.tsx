import renderer from "react-test-renderer";
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import ProductsList from "./ProductsList";

const products =  [
  {
    "id": "68",
    "name": "Pure Cotton Printed Short Sleeve T-Shirt",
    "image_key": "SD_01_T41_8774_ZZ_X_EC_0",
    "price": {
      "current_price": 850,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5",
      "1",
      "3",
      "2"
    ]
  },
  {
    "id": "69",
    "name": "Pure Linen Ankle Grazer Peg Trousers",
    "image_key": "SD_01_T57_7082_T4_X_EC_90",
    "price": {
      "current_price": 2950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5"
    ]
  },
  {
    "id": "70",
    "name": "Twinset Cardigan",
    "image_key": "SD_01_T38_4924_DC_X_EC_0",
    "price": {
      "current_price": 1600,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "5",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "71",
    "name": "Pure Cotton Striped Short Sleeve T-Shirt",
    "image_key": "SD_01_T41_8036Z_ZZ_X_EC_0",
    "price": {
      "current_price": 650,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "4",
      "5",
      "1",
      "3"
    ]
  },
  {
    "id": "72",
    "name": "Printed Long Sleeve Shirt",
    "image_key": "SD_01_T43_2301T_A4_X_EC_0",
    "price": {
      "current_price": 3950,
      "original_price": 4500,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "3",
      "5",
      "4"
    ]
  },
  {
    "id": "73",
    "name": "PETITE Long Sleeve Fit & Flare Dress",
    "image_key": "SD_01_T42_7000P_CB_X_EC_0",
    "price": {
      "current_price": 3500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "4",
      "3",
      "5",
      "1"
    ]
  },
  {
    "id": "74",
    "name": "Padded Jacket",
    "image_key": "SD_01_T49_4315_Y4_X_EC_0",
    "price": {
      "current_price": 4950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "3",
      "1"
    ]
  },
  {
    "id": "75",
    "name": "Animal Print Short Sleeve Shift Midi Dress",
    "image_key": "SD_01_T42_5969_T4_X_EC_0",
    "price": {
      "current_price": 2950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5",
      "3",
      "1",
      "2",
      "4"
    ]
  },
  {
    "id": "76",
    "name": "CURVE Round Neck Short Sleeve Tunic",
    "image_key": "SD_01_T41_8010E_E0_X_EC_0",
    "price": {
      "current_price": 2250,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "1",
      "5",
      "4"
    ]
  },
  {
    "id": "77",
    "name": "Cable Knit Turtle Neck Jumper",
    "image_key": "SD_01_T38_2870_QE_X_EC_0",
    "price": {
      "current_price": 3500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "5",
      "1",
      "3",
      "2"
    ]
  },
  {
    "id": "78",
    "name": "Jersey Pencil Maxi Skirt",
    "image_key": "SD_01_T57_8008_F4_X_EC_90",
    "price": {
      "current_price": 2250,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "4",
      "3"
    ]
  },
  {
    "id": "79",
    "name": "Pure Cotton Chino Shorts",
    "image_key": "SD_01_T57_3381S_NU_X_EC_0",
    "price": {
      "current_price": 1500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2"
    ]
  },
  {
    "id": "80",
    "name": "Slim Bootcut Leg Trousers",
    "image_key": "SD_01_T59_6608_Y0_X_EC_0",
    "price": {
      "current_price": 2950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5",
      "3",
      "4"
    ]
  },
  {
    "id": "81",
    "name": "Textured Jersey Wide Leg Trousers",
    "image_key": "SD_01_T57_6176_F4_X_EC_90",
    "price": {
      "current_price": 2750,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "1",
      "5"
    ]
  },
  {
    "id": "82",
    "name": "Striped Shift Mini Dress",
    "image_key": "SD_01_T42_6000_P4_X_EC_0",
    "price": {
      "current_price": 2500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "1"
    ]
  },
  {
    "id": "83",
    "name": "Jersey Tapered Peg Trousers",
    "image_key": "SD_01_T57_6997_KA_X_EC_0",
    "price": {
      "current_price": 2250,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5"
    ]
  },
  {
    "id": "84",
    "name": "Denim Skirt",
    "image_key": "SD_01_T57_9489_XU_X_EC_0",
    "price": {
      "current_price": 2950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "1"
    ]
  },
  {
    "id": "85",
    "name": "Single Breasted Blazer",
    "image_key": "SD_01_T59_1572J_Y0_X_EC_0",
    "price": {
      "current_price": 2950,
      "original_price": 4500,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "3",
      "1"
    ]
  },
  {
    "id": "86",
    "name": "Striped Turtle Neck Jumper",
    "image_key": "SD_01_T38_2470_K4_X_EC_0",
    "price": {
      "current_price": 3500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "3"
    ]
  },
  {
    "id": "87",
    "name": "Cotton Rich Tapered Leg Peg Trousers",
    "image_key": "SD_01_T59_5021T_Y0_X_EC_0",
    "price": {
      "current_price": 4950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "3",
      "5",
      "1",
      "2",
      "4"
    ]
  },
  {
    "id": "88",
    "name": "Jersey Pleated Midi Skirt",
    "image_key": "SD_01_T59_7994_F3_X_EC_90",
    "price": {
      "current_price": 2500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "5"
    ]
  },
  {
    "id": "89",
    "name": "Checked A-Line Midi Skirt",
    "image_key": "SD_01_T59_7912_T4_X_EC_90",
    "price": {
      "current_price": 3500,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5"
    ]
  },
  {
    "id": "90",
    "name": "Pure Cotton Printed Short Sleeve T-Shirt",
    "image_key": "SD_01_T41_8034Z_F4_X_EC_0",
    "price": {
      "current_price": 650,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "1",
      "3"
    ]
  },
  {
    "id": "91",
    "name": "Striped Oversized Long Sleeve Shirt",
    "image_key": "SD_01_T43_1342_F4_X_EC_0",
    "price": {
      "current_price": 2950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2",
      "4",
      "5",
      "1",
      "3"
    ]
  },
  {
    "id": "92",
    "name": "Wedge Heel Mule Shoes",
    "image_key": "SD_01_T02_0050A_Y0_X_EC_0",
    "price": {
      "current_price": 1950,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "3",
      "5",
      "2",
      "4"
    ]
  },
  {
    "id": "93",
    "name": "Cotton Rich Striped Short Sleeve T-Shirt",
    "image_key": "SD_01_T41_1217_E4_X_EC_0",
    "price": {
      "current_price": 650,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "2"
    ]
  },
  {
    "id": "94",
    "name": "Checked Relaxed Straight Leg Crepe Trousers",
    "image_key": "SD_01_T59_5506_F4_X_EC_0",
    "price": {
      "current_price": 3500,
      "original_price": 4500,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "1",
      "4"
    ]
  },
  {
    "id": "95",
    "name": "Textured Ankle Grazer Trousers",
    "image_key": "SD_01_T57_6169_F4_X_EC_0",
    "price": {
      "current_price": 2750,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "5",
      "3",
      "1"
    ]
  },
  {
    "id": "96",
    "name": "Checked Open Front Blazer",
    "image_key": "SD_01_T59_0586J_E4_X_EC_0",
    "price": {
      "current_price": 6900,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "2",
      "3",
      "1"
    ]
  },
  {
    "id": "97",
    "name": "Pure Cotton Scoop Neck Vest Top",
    "image_key": "SD_01_T41_1391_B0_X_EC_0",
    "price": {
      "current_price": 450,
      "original_price": null,
      "currency_code": "GBP"
    },
    "offer_ids": [
      "4",
      "5"
    ]
  }
];
describe("ProductsList", () => {
  afterEach(cleanup);
  it('renders products correctly', () => {
    const { getByText } = render(
      <ProductsList allProducts={products}/>
    );
    expect(getByText(/pure linen ankle grazer peg trousers/i)).toBeTruthy();
  });
  it('renders load more correctly', () => {
    const { getByText } = render(
      <ProductsList allProducts={products}/>
    );
    expect(getByText(/load more/i)).toBeTruthy();
  });
  it('load more works correctly', () => {
    const { getByText } = render(
      <ProductsList allProducts={products}/>
    );
    fireEvent.click(getByText(/load more/i));
    expect(getByText(/slim bootcut leg trousers/i)).toBeTruthy();
  });
});

