const {gql} = require("apollo-server");

const reservationType = gql`
    type Reservation {
        id: ID!
        user: User!
        dateFrom: String!
        dateTo: String!
    }

    type Query {
        reservations: [Reservation!]
        reservation: Reservation!
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