import { Inject, Injectable } from "@nestjs/common";

import { PrismaService } from "@/prisma/prisma.service";

import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UserService {
    constructor(@Inject("PRISMA_CLIENT") private prisma: PrismaService) {}
    create(createUserInput: CreateUserInput) {
        return "This action adds a new user";
    }

    findAll() {
        return "This action returns all user";
    }

    findOne(id: string) {
        return `This action returns a #${id} user`;
    }

    update(id: string, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return `This action removes a #${id} user`;
    }
}
