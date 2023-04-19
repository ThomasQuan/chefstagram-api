import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsStrongPassword } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field(() => String)
    username: string;

    @Field(() => String)
    firstName: string;

    @Field(() => String)
    lastName: string;

    @Field(() => String)
    @IsEmail()
    email: string;

    @Field(() => String)
    @IsStrongPassword()
    // Later when we setup auth correctly
    // @IsHash()
    password: string;
}
