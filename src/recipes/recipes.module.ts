import { Module } from "@nestjs/common";

import { RecipesResolver } from "./recipes.resolver";
import { RecipesService } from "./recipes.service";

@Module({
    providers: [RecipesResolver, RecipesService],
    exports: [RecipesResolver, RecipesService]
})
export class RecipesModule {}
