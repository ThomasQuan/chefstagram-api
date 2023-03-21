import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

type PrismaClientMethods = keyof Omit<
    PrismaClient,
    | "$on"
    | "$connect"
    | "$disconnect"
    | "$use"
    | "$executeRaw"
    | "$executeRawUnsafe"
    | "$queryRaw"
    | "$queryRawUnsafe"
    | "$transaction"
>;

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly modelName: PrismaClientMethods;
    private readonly prismaClient: PrismaClient = new PrismaClient();
    constructor(modelName: PrismaClientMethods) {
        this.modelName = modelName;
    }

    async onModuleInit() {
        await this.prismaClient.$connect();
    }

    async findMany(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async findFirst(args: any) {
        return (this.prismaClient[this.modelName] as any).findFirst(args);
    }

    async createOne(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async createMany(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async updateOne(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }
    async updateMany(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async deleteOne(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async deleteMany(args: any) {
        return (this.prismaClient[this.modelName] as any).findMany(args);
    }

    async onModuleDestroy() {
        await this.prismaClient.$disconnect();
    }
}
