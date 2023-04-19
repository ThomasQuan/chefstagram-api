import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRecipeInput {
    @Field(() => String)
    name: string;

    @Field(() => ID)
    userId: string;
}
