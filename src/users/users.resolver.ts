import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { RelationModificationInput } from "@/share/inputs/relation-modification.input";

import { CreateUserInput } from "./dto/create-user.input";
import { EditUserInput } from "./dto/edit-user.input";
import { UsersWhereInput } from "./dto/search-user.input";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { RecipesService } from "@/recipes/recipes.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
        private readonly recipeService: RecipesService
    ) {}

    @ResolveField()
    async recipes(@Parent() user: User) {
        const { id } = user;
        return this.recipeService.findMany({ userId: id });
    }

    @Mutation(() => User)
    createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
        //perform all the step to add recipe, requirement, quantity...etc
        return this.usersService.create(createUserInput);
    }

    @Mutation(() => User)
    editUser(
        @Args("editUserInput") editUserInput: EditUserInput,
        @Args("relationModification", { nullable: true })
        relationModification: RelationModificationInput
    ) {
        if (relationModification) {
            // do some connection and disconnection function here
        }
        return this.usersService.edit(editUserInput);
    }

    @Query(() => User, { name: "user" })
    findOne(@Args("id", { type: () => ID }) id: string) {
        return this.usersService.findOne(id);
    }

    @Query(() => [User], { name: "users" })
    findMany(@Args("args", { nullable: true }) args: UsersWhereInput) {
        return this.usersService.findMany(args);
    }
}
