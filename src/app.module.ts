import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { RecipesModule } from "./recipes/recipes.module";
import { UserModule } from "./user/users.module";

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
        UserModule,
        RecipesModule,
        PrismaModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
