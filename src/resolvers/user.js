const { prismaClient } =  require("../../prisma/prismaClient.js");

const resolverUser = {
    createUser: (parent, args) => {
        return prismaClient.user.create({
            data: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                role: args.role
            }
        })
    },
    getUsers: (parent, args) => {
        return prismaClient.user.findMany({});
    },
    getUser: (parent, args) => {
        return prismaClient.user.findFirst({
            where: { id: args.id}
        })
    }
}

module.exports = {
    resolverUser
}