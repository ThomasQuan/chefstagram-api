import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class SearchRecipeInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => ID, { nullable: true })
    userId?: string;
}
