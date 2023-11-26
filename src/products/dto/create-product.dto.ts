import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    url: string

    @ApiProperty()
    selector: string

    @ApiProperty()
    storeId: string
}
