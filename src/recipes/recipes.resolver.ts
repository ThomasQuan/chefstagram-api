import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

import { CreateRecipeInput } from "./dto/create-recipe.input";
import { UpdateRecipeInput } from "./dto/update-recipe.input";
import { RecipesService } from "./recipes.service";

@Resolver("Recipe")
export class RecipesResolver {
    constructor(private readonly recipesService: RecipesService) {}

    @Query("recipes")
    findMany(args: Prisma.RecipeFindManyArgs) {
        return this.recipesService;
    }
}
