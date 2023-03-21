import { Injectable } from "@nestjs/common";

import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class RecipesService extends PrismaService {
    constructor() {
        super("recipe");
    }
}
