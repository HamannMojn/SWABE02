import { ApolloError } from "apollo-server";
import { enumType, extendType, floatArg, intArg, nonNull, objectType, stringArg } from "nexus";

export const RoomType = enumType({
    name: "RoomType",
    members: {
        SINGLE: "Single",
        DOUBLE: "Double",
        EXCLUSIVE: "Exclusive",
        PRESIDENTIAL: "Presidential"
    },
});

export const Room = objectType({
    name: "Room",
    definition(x) {
        x.nonNull.id("id");
        x.nonNull.int("roomNumber");
        x.nonNull.float("price");
        x.nonNull.field("roomType", {type: RoomType})
    }
})

export const RoomQuery = extendType({
    type: "Query",
    definition: (x) => {
        x.nullable.list.field("getRooms", {
            type: "Room",
            resolve: (source, args, context) => {
                return context.db.room.findMany();
            },
        });
        x.nullable.field("getRoom", {
            type: "Room",
            args: {
                roomId: nonNull(intArg()),
            },
            resolve: (source, args, context) => {
                try {
                    let room = context.db.room.findFirst({ where: {id: args.roomId}});

                    if(!room){
                        throw new Error("No room with id:" + args.roomId);
                    }
                    return room
                } catch (error) {
                    throw new ApolloError(error);
                }
            },
        });
    },
});

export const roomMutation = extendType({
    type: "Mutation",
    definition: (x) => {
        x.nonNull.field("createRoom", {
            type: "Room",
            args: {
                roomNumber: nonNull(intArg()),
                price: nonNull(floatArg()),
                roomType: nonNull(RoomType),
            },
            resolve(_root, args, context) {
                let room = {
                    roomNumber: args.roomNumber,
                    price: args.price,
                    roomType: args.roomType
                };

                return context.db.room.create({data: room});
            }
        });
    }
})