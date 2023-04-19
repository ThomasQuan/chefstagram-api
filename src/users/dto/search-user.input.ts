import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UsersWhereInput {
    @Field({ nullable: true })
    fullName?: string;
}
