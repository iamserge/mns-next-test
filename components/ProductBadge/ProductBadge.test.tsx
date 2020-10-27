import renderer from "react-test-renderer";
import { cleanup, fireEvent, getByAltText, render, waitFor } from '@testing-library/react';
import { AuthContext, defaultUser } from "../../providers/auth";
import ProductBadge from "./ProductBadge";

describe("ProductBadge", () => {
  afterEach(cleanup);
  it('renders Gone soon product badge', () => {
    const newUser = defaultUser;
    newUser.id = 4;
    newUser.userOffers = {
      "1": {
        "id": "1",
        "type": "REDUCED",
        "title": "Get it while it lasts!",
        "badge": "gonesoon"
      },
      "4": {
        "id": "4",
        "type": "SLOTTED",
        "title": "Discount available!",
        "badge": "loyalty"
      },
      "5": {
        "id": "5",
        "type": "BONUS",
        "title": "Super sale!",
        "badge": "loyalty"
      }
    }
    const context = {
      user: newUser,
      isLoggedIn: true,
      incorrectUser: false,
      cachedUserId: "",
      logIn: async (_id: string) => { },
      logOut: async () => { },
    }
    const offers = ["1","4"]
    const { getByAltText } = render(
      <AuthContext.Provider value={context}>
        <ProductBadge productOffers={offers} />
      </AuthContext.Provider>
    );
    const imgNode = getByAltText(/get it while it lasts!/i)
    expect(imgNode.classList.contains('gonesoon')).toBeTruthy();


  });

});

