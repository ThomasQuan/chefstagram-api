import { Inject, Injectable } from "@nestjs/common";

import { PrismaService } from "@/prisma/prisma.service";

import { CreateRecipeInput } from "./dto/create-recipe.input";
import { EditRecipeInput } from "./dto/edit-recipe.input";
import { SearchRecipeInput } from "./dto/search-recipe.input";

@Injectable()
export class RecipesService {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
    create(createRecipeInput: CreateRecipeInput) {
        return this.prismaService.recipe.create({
            data: createRecipeInput
        });
    }

    edit(editRecipeInput: EditRecipeInput) {
        return this.prismaService.recipe.update({
            where: {
                id: editRecipeInput.id
            },
            data: editRecipeInput
        });
    }

    findMany(args: SearchRecipeInput) {
        return this.prismaService.recipe.findMany({
            where: {
                isDeleted: false,
                OR: [
                    {
                        name: {
                            contains: args.name
                        }
                    },
                    {
                        userId: args.userId
                    }
                ]
            }
        });
    }

    findOne(id: string) {
        return this.prismaService.recipe.findUnique({
            where: {
                id
            }
        });
    }
}
