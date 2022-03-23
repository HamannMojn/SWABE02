const {gql} = require("apollo-server");

const roomType = gql`
    type Room {
        id: ID!
        roomNumber: Int!
        roomType: RoomType!
        price: Float!
        reservation: Reservation
    }

    enum RoomType {
        Single
        Double
        Exclusive
        Presidential
    }

    type Query {
        getRooms: [Room!]
        getRoom: Room!
    }

    type Mutation {
        createRoom(
            roomNumber: Int!
            roomType: RoomType!
            price: Float!
        ): Room!
    }
`;

module.exports = {
    roomType
};