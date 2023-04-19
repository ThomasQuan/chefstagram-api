import { Field, ID, ObjectType } from "@nestjs/graphql";

import { Recipe } from "@/recipes/entities/recipe.entity";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    username: string;

    @Field(() => String)
    firstName: string;

    @Field(() => String)
    lastName: string;

    @Field(() => String)
    fullName: string;

    @Field(() => [Recipe], {
        defaultValue: [],
        description: "List of recipe this user is connected to"
    })
    recipes: Recipe[];
}
