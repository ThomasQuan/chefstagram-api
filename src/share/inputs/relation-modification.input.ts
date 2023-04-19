import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class ConnectDisconnect {
    @Field(() => [ID], {
        description: "Specify the list of ID to connect to"
    })
    connect: string[];

    @Field(() => [ID], {
        description: "Specify the list of ID to disconnect from"
    })
    disconnect: string[];
}

@InputType()
export class RelationModificationInput {
    @Field(() => ConnectDisconnect)
    requirements: { connect: string[]; disconnect: string[] };
}
