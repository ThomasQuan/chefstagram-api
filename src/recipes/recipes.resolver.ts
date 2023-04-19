import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";

import { RelationModificationInput } from "@/share/inputs/relation-modification.input";

import { CreateRecipeInput } from "./dto/create-recipe.input";
import { EditRecipeInput } from "./dto/edit-recipe.input";
import { SearchRecipeInput } from "./dto/search-recipe.input";
import { Recipe } from "./entities/recipe.entity";
import { RecipesService } from "./recipes.service";

@Resolver(() => Recipe)
export class RecipesResolver {
    constructor(private readonly recipesService: RecipesService) {}

    @Mutation(() => Recipe)
    createRecipe(@Args("createRecipeInput") createRecipeInput: CreateRecipeInput) {
        //perform all the step to add recipe, requirement, quantity...etc
        return this.recipesService.create(createRecipeInput);
    }

    @Mutation(() => Recipe)
    editRecipe(
        @Args("editRecipeInput") editRecipeInput: EditRecipeInput,
        @Args("relationModification", { nullable: true })
        relationModification: RelationModificationInput
    ) {
        if (relationModification) {
            // do some connection and disconnection function here
        }
        return this.recipesService.edit(editRecipeInput);
    }

    @Query(() => [Recipe], { name: "recipes" })
    findMany(args: SearchRecipeInput) {
        return this.recipesService.findMany(args);
    }

    @Query(() => Recipe, { name: "recipe" })
    findOne(@Args("id", { type: () => ID }) id: string) {
        return this.recipesService.findOne(id);
    }
}
