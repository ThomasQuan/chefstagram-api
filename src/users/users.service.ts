import { Inject, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "@/prisma/prisma.service";

import { CreateUserInput } from "./dto/create-user.input";
import { EditUserInput } from "./dto/edit-user.input";
import { UsersWhereInput } from "./dto/search-user.input";

@Injectable()
export class UsersService {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    create(args: CreateUserInput) {
        return this.prismaService.user.create({
            data: {
                ...args,
                password: "hashed password",
                fullName: `${args.firstName} ${args.lastName}`
            }
        });
    }

    edit(args: EditUserInput) {
        return this.prismaService.user.update({
            where: {
                id: args.id
            },
            data: {
                ...args
            }
        });
    }

    findMany(args: UsersWhereInput) {
        const findManyArgs: Prisma.UserFindManyArgs | undefined = args
            ? {
                  where: {
                      isDeleted: false,
                      fullName: {
                          contains: args.fullName
                      }
                  }
              }
            : undefined;
        return this.prismaService.user.findMany(findManyArgs);
    }

    findOne(id: string) {
        return this.prismaService.user.findUnique({
            where: {
                id
            }
        });
    }
}
