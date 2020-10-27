export const getBadgesForOffers = (badges) => {
    const badgesForOffers = {};
    const badgesArray = badges.split('||');
    badgesArray.forEach(badge => {
        const badgeInfo = badge.split(':')
        const badgeIcon = badgeInfo[0];
        const offerTypes = badgeInfo[1].split(',');
        offerTypes.forEach(offer => {
            badgesForOffers[offer] = badgeIcon;
        })
    });
    return badgesForOffers;
}

export const processUserBadges = (availableBadges, offers) => {
    const userOffers = {};
    const badgesForOffers = getBadgesForOffers(availableBadges);
    offers.forEach(offer => {
        const newOffer = {
            ...offer,
            badge: badgesForOffers[offer.type]
        }
        userOffers[offer.id] = newOffer;
    });
    return userOffers;
}