import { userType } from './user.js';
import { roomType } from './room.js';
import { reservationType } from './reservation';

makeExecutableSchema({
    typeDefs: [userType, roomType, reservationType]
});