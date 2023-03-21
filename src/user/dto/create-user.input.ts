import { IsEmail, IsStrongPassword, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserInput {
    @MinLength(2)
    @MaxLength(50)
    username: string;

    @IsEmail()
    @MaxLength(500)
    email: string;

    @MinLength(2)
    @MaxLength(50)
    firstName: string;

    @MinLength(2)
    @MaxLength(50)
    lastName: string;

    @IsStrongPassword()
    password: string;
}
