import { PartialType } from "@nestjs/mapped-types";
import { Exclude } from "class-transformer";

import { CreateUserInput } from "./create-user.input";

export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Exclude()
    password?: string | undefined;
}
