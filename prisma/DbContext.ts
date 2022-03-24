import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal extends NodeJS.Global {
    DbContext: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const DbContext = global.DbContext || new PrismaClient();

export default DbContext;