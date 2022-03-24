import { ApolloError } from "apollo-server";
import { enumType, extendType, intArg, nonNull, objectType, stringArg } from "nexus";


export const Role = enumType({
    name: "Role",
    members: {
        MANAGER: "Manager",
        CLERK: "Clerk",
        GUEST: "Guest"
    },
});

export const User = objectType({
    name: "User",
    definition(x) {
        x.nonNull.id("id");
        x.nonNull.string("firstName");
        x.nonNull.string("lastName");
        x.nonNull.string("email");
        x.nonNull.field("role", {type: Role})
    }
})

export const UserQuery = extendType({
    type: "Query",
    definition: (x) => {
        x.nullable.list.field("getUsers", {
            type: "User",
            resolve: (source, args, context) => {
                return context.db.user.findMany();
            },
        });
        x.nullable.field("getUser", {
            type: "User",
            args: {
                userId: nonNull(intArg()),
            },
            resolve: (source, args, context) => {
                try {
                    let user = context.db.user.findFirst({ where: {id: args.userId}});

                    if(!user){
                        throw new Error("No user with id:" + args.userId);
                    }
                    return user
                } catch (error) {
                    throw new ApolloError(error);
                }
            },
        });
    },
});

export const userMutation = extendType({
    type: "Mutation",
    definition: (x) => {
        x.nonNull.field("createUser", {
            type: "User",
            args: {
                firstName: nonNull(stringArg()),
                lastName: nonNull(stringArg()),
                email: nonNull(stringArg()),
                role: nonNull(Role),
            },
            resolve(_root, args, context) {
                let user = {
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    role: args.role
                };

                return context.db.user.create({data: user});
            }
        });
    }
})