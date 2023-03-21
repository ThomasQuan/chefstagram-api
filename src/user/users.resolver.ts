import { HttpStatus, ParseUUIDPipe } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Prisma, Recipe } from "@prisma/client";

import { RecipesService } from "@/recipes/recipes.service";

import { UserService } from "./users.service";

import { User } from "@/types/graphql";

@Resolver("User")
export class UserResolver {
    constructor(private userService: UserService, private recipieService: RecipesService) {}

    // START OF RESOLVER FIELDS
    @ResolveField()
    async recipes(@Parent() user: User): Promise<Recipe[]> {
        const { id } = user;
        const result = this.recipieService.findMany({
            where: {
                userId: id,
                isDeleted: false
            }
        });

        return result;
    }

    // END OF RESOLVER FIELDS

    // START OF QUERIES
    @Query("users")
    findMany(args: Prisma.UserFindManyArgs) {
        return this.userService.findMany(args);
    }

    @Query("user")
    findFirst(
        @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: string
    ) {
        return this.userService.findFirst(id);
    }
    // END OF QUERIES

    // // START OF MUTATIONS
    // @Mutation("createUser")
    // createOne(@Args("createUserInput") createUserInput: CreateUserInput) {
    //     return this.userService.create(createUserInput);
    // }

    // @Mutation("updateUser")
    // @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
    // update(
    //     @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    //     id: string,
    //     @Args("updateUserInput") updateUserInput: UpdateUserInput
    // ) {
    //     return this.userService.update(id, updateUserInput);
    // }

    // @Mutation("removeUser")
    // remove(
    //     @Args("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    //     id: string
    // ) {
    //     return this.userService.remove(id);
    // }
    // END OF MUTATIONS
}
