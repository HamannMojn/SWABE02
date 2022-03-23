const {gql} = require("apollo-server");

const reservationType = gql`
    type Reservation {
        id: ID!
        user: User!
        dateFrom: String!
        dateTo: String!
    }

    type Query {
        getReservations: [Reservation!]
        getReservation: Reservation!
    }

    type Mutation {
        createReservation(
            userId: Int!
            roomNumber: Int!
            roomType: RoomType!
            price: Float!
        ): Reservation!
    }
`;

module.exports = {
    reservationType
};