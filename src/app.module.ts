import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { RecipesModule } from "./recipes/recipes.module";
import { UsersModule } from "./users/users.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            buildSchemaOptions: { dateScalarMode: "timestamp" }
        }),
        PrismaModule,
        UsersModule,
        RecipesModule
    ],
    controllers: [AppController],
    providers: [PrismaService, AppService]
})
export class AppModule {}
