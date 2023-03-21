import { Module } from "@nestjs/common";

import { RecipesModule } from "@/recipes/recipes.module";

import { UserResolver } from "./users.resolver";
import { UserService } from "./users.service";

@Module({
    imports: [RecipesModule],
    providers: [UserResolver, UserService]
})
export class UserModule {}
