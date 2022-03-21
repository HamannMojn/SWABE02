const {gql} = require("apollo-server");

const roomType = gql`
    type Room {
        id: ID!
        roomNumber: Int!
        roomType: RoomType!
        price: Float!
    }

    enum RoomType {
        Single
        Double
        Exclusive
        Presidential
    }

    type Query {
        rooms: [Room!]
        room: Room!
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