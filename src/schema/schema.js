
const {gql} = require("apollo-server");


const typeDefs = gql`
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
}

enum Role {
    Guest
    Clerk
    Manager
}

type Query {
    getUsers: [User!]
    getUser: User!
    getReservations: [Reservation!]
    getReservation: Reservation!
    getRooms: [Room!]
    getRoom: Room!
}

type Mutation {
    createUser(
        email: String!
        firstName: String!
        lastName: String!
        role: Role
    ): User!
    createRoom(
        roomNumber: Int!
        roomType: RoomType!
        price: Float!
    ): Room!
    createReservation(
        userId: Int!
        roomNumber: Int!
        roomType: RoomType!
        price: Float!
    ): Reservation!
}
type Reservation {
    id: ID!
    user: User!
    dateFrom: String!
    dateTo: String!
}

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
`

module.exports = {
    typeDefs
}