import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, User } from "@prisma/client";

import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UserService extends PrismaService {
    constructor() {
        super("user");
    }

    create(createUserInput: CreateUserInput) {
        const { password, firstName, lastName, ...rest } = createUserInput;
        return super.createOne({
            data: {
                ...rest,
                password,
                firstName,
                lastName,
                fullName: `${firstName} ${lastName}`
            }
        });
    }
}
