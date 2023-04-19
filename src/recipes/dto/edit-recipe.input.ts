import { Field, ID, InputType, PartialType } from "@nestjs/graphql";

import { CreateRecipeInput } from "./create-recipe.input";

@InputType()
export class EditRecipeInput extends PartialType(CreateRecipeInput) {
    @Field(() => ID)
    id: string;
}
