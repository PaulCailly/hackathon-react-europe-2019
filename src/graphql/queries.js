// eslint-disable
// this is an auto generated file. This will be overwritten

export const getOffer = `query GetOffer($id: ID!) {
  getOffer(id: $id) {
    id
    img
    name
    description
    price
    link
    featured
  }
}
`;
export const listOffers = `query ListOffers(
  $filter: ModelOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      img
      name
      description
      price
      link
      featured
    }
    nextToken
  }
}
`;
