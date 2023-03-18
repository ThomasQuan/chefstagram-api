import { IsEmail, IsStrongPassword, Max, Min } from "class-validator";

export class CreateUserInput {
    @Min(8)
    @Max(50)
    username: string;

    @IsEmail()
    email: string;

    @Min(2)
    @Max(50)
    firstName: string;
    @Min(2)
    @Max(50)
    lastName: string;

    @Min(4)
    @Max(110)
    fullName: string;

    @IsStrongPassword()
    password: string;
}
