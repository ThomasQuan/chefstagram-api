import { HttpStatus, ParseUUIDPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UserService } from "./user.service";

@Resolver("User")
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query("users")
    findAll() {
        return this.userService.findAll();
    }

    @Query("user")
    findOne(
        @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: string
    ) {
        return this.userService.findOne(id);
    }

    @Mutation("createUser")
    createOne(@Args("createUserInput") createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
    }

    @Mutation("updateUser")
    @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
    update(
        @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: string,
        @Args("updateUserInput") updateUserInput: UpdateUserInput
    ) {
        return this.userService.update(id, updateUserInput);
    }

    @Mutation("removeUser")
    remove(
        @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: string
    ) {
        return this.userService.remove(id);
    }
}
