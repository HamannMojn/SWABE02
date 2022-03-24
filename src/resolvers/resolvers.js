const { prismaClient } =  require("../../prisma/prismaClient.js");

const Query = {
    getReservations: (parent, args) => {
        return prismaClient.reservation.findMany({});
    },
    getReservation: (parent, args) => {
        return prismaClient.reservation.findFirst({
            where: { id: args.id}
        });
    },
    getRooms: (parent, args) => {
        return prismaClient.room.findMany({});
    },
    getRoom: (parent, args) => {
        return prismaClient.room.findFirst({
            where: { id: args.id}
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

const Mutation = {
    createReservation: (parent, args) => {
        
        return prismaClient.reservation.create({
            data: {
                userId: args.userId,
                dateTo: args.dateTo,
                dateFrom: args.dateFrom
            }
        })
    },
    createRoom: (parent, args) => {
        return prismaClient.room.create({
            data: {
                roomNumber: args.roomNumber,
                roomType: args.roomType,
                price: args.price
            }
        })
    },
    createUser: (parent, args) => {
        return prismaClient.user.create({
            data: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                role: args.role
            }
        })
    }
}

const resolvers = {
    Query,
    Mutation
}

module.exports = {
    resolvers
}