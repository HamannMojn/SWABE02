const {gql} = require("apollo-server");

const userType = gql`
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
        users: [User!]
        user: User!
    }

    type Mutation {
        createUser(
            email: String!
            firstName: String!
            lastName: String!
            role: Role
        ): User!
    }
`;

module.exports = {
    userType
};