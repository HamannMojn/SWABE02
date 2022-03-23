const { prismaClient } =  require("../../prisma/prismaClient.js");

const resolverReservation = {
    createReservation: (parent, args) => {
        return prismaClient.reservation.create({
            data: {
                userId: args.userId,
                dateTo: args.dateTo,
                dateFrom: args.dateFrom
            }
        })
    },
    getReservations: (parent, args) => {
        return prismaClient.reservation.findMany({});
    },
    getReservation: (parent, args) => {
        return prismaClient.reservation.findFirst({
            where: { id: args.id}
        });
    }
}

module.exports = {
    resolverReservation
}