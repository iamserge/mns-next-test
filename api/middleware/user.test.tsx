import { getBadgesForOffers, processUserBadges } from "./user";
const badges = "loyalty:SLOTTED,BONUS||sale:PRIORITY_ACCESS,REDUCED";
const offers = [
  {
    id: "6",
    title: "Reductions!",
    type: "REDUCED",
  },
  {
    id: "1",
    title: "Reductions!",
    type: "SLOTTED",
  },

]
describe("User middleware", () => {
  it("getBadgesForOffers works correctly", () => {
    const badgesForOffers =  getBadgesForOffers(badges);
    expect(badgesForOffers["SLOTTED"]).toBe('loyalty');
    expect(badgesForOffers["REDUCED"]).toBe('sale');
  });
  it("processUserBadges works correctly", () => {
    const userOffers =  processUserBadges(badges, offers);
    expect(userOffers["6"].badge).toBe('sale');
    expect(userOffers["1"].badge).toBe('loyalty');
  });
});
