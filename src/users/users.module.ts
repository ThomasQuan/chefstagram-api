import { Module } from "@nestjs/common";

import { RecipesService } from "@/recipes/recipes.service";

import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    providers: [UsersResolver, UsersService, RecipesService]
})
export class UsersModule {}
