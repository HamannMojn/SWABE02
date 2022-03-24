import { ApolloError } from "apollo-server";
import { enumType, extendType, floatArg, intArg, nonNull, objectType, stringArg } from "nexus";

export const Reservation = objectType({
    name: "Reservation",
    definition(x) {
        x.nonNull.id("id");
        x.nonNull.int("userId");
        x.nonNull.int("roomId");
        x.nonNull.string("dateFrom");
        x.nonNull.string("dateTo");
    }
});

export const ReservationQuery = extendType({
    type: "Query",
    definition: (x) => {
        x.nullable.list.field("getReservations", {
            type: "Reservation",
            resolve: (source, args, context) => {
                return context.db.reservation.findMany();
            },
        });
        x.nullable.field("getReservation", {
            type: "Reservation",
            args: {
                reservationId: nonNull(intArg()),
            },
            resolve: (source, args, context) => {
                try {
                    let reservation = context.db.reservation.findFirst({ where: {id: args.reservationId}});

                    if(!reservation){
                        throw new Error("No reservation with id:" + args.reservationId);
                    }
                    return reservation
                } catch (error) {
                    throw new ApolloError(error);
                }
            },
        });
    },
});

export const reservationMutation = extendType({
    type: "Mutation",
    definition: (x) => {
        x.nonNull.field("createReservation", {
            type: "Reservation",
            args: {
                userId: nonNull(intArg()),
                roomId: nonNull(intArg()),
                dateFrom: nonNull(stringArg()),
                dateTo: nonNull(stringArg())
            },
            resolve(_root, args, context) {
                let reservation = {
                    userId: args.userId,
                    roomId: args.roomId,
                    dateFrom: args.dateFrom,
                    dateTo: args.dateTo
                };

                return context.db.reservation.create({data: reservation});
            }
        });
    }
})