
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateRecipeInput {
    name?: Nullable<string>;
    upvote?: Nullable<number>;
    downVote?: Nullable<number>;
    userId?: Nullable<string>;
}

export class UpdateRecipeInput {
    id: string;
    name?: Nullable<string>;
    upvote?: Nullable<number>;
    downVote?: Nullable<number>;
    userId?: Nullable<string>;
}

export class CreateUserInput {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    username?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Recipe {
    __typename?: 'Recipe';
    id?: Nullable<string>;
    name?: Nullable<string>;
    upvote?: Nullable<number>;
    downVote?: Nullable<number>;
    user?: Nullable<User>;
    userId?: Nullable<string>;
    isDeleted?: Nullable<boolean>;
    deletedDate?: Nullable<string>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract recipes(): Nullable<Recipe>[] | Promise<Nullable<Recipe>[]>;

    abstract recipe(id: number): Nullable<Recipe> | Promise<Nullable<Recipe>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createRecipe(createRecipeInput: CreateRecipeInput): Recipe | Promise<Recipe>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export class User {
    __typename?: 'User';
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    recipes?: Nullable<Nullable<Recipe>[]>;
}

type Nullable<T> = T | null;
