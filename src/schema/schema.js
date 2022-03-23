const { userType } = require('./user.js');
const { roomType } = require('./room.js');
const { reservationType } = require('./reservation');

const { resolverUser} = require('../resolvers/user');
const { resolverRoom} = require('../resolvers/room');
const { resolverReservation} = require('../resolvers/reservation');
const { merge } = require('lodash');
const {gql} = require("apollo-server");

const stringdefs = merge(userType, roomType, reservationType);
const resolvers = merge(resolverUser, resolverRoom, resolverReservation);

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
}

type Mutation {
    createUser(
        email: String!
        firstName: String!
        lastName: String!
        role: Role
    ): User!
}
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
`

module.exports = {
    typeDefs, resolvers
}