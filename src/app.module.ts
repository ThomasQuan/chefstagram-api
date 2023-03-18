import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ["./**/*.graphql"],
            definitions: {
                path: join(process.cwd(), "src/types/graphql.ts"),
                outputAs: "class",
                emitTypenameField: true
            },
            playground: true
        }),
        PrismaModule,
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService]
})
export class AppModule {}
