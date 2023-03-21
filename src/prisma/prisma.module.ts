import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

import { PrismaService } from "./prisma.service";

@Global()
@Module({
    providers: [
        {
            provide: PrismaService,
            useFactory: () => new PrismaService("user")
        }
    ],
    exports: [PrismaService]
})
export class PrismaModule {}
