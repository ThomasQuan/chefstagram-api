import { Field, ID, InputType, OmitType, PartialType } from "@nestjs/graphql";

import { CreateUserInput } from "./create-user.input";

@InputType()
export class EditUserInput extends OmitType(PartialType(CreateUserInput), ["password"]) {
    @Field(() => ID)
    id: string;
}
