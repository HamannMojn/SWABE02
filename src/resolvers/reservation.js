const { prismaClient } =  require("../../prisma/prismaClient.js");

const Mutations = {
    createReservation: (parent, args) =>{
        return prismaClient.reservation.create({
            data: {
                userId: args.userId,
                dateTo: args.dateTo,
                dateFrom: args.dateFrom
            }
        })
    }
}