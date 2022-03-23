const { prismaClient } =  require("../../prisma/prismaClient.js");

const resolverRoom = {
    createRoom: (parent, args) => {
        return prismaClient.room.create({
            data: {
                roomNumber: args.roomNumber,
                roomType: args.roomType,
                price: args.price
            }
        })
    },
    getRooms: (parent, args) => {
        return prismaClient.room.findMany({});
    },
    getRoom: (parent, args) => {
        return prismaClient.room.findFirst({
            where: { id: args.id}
        })
    }
}



module.exports = {
    resolverRoom
}