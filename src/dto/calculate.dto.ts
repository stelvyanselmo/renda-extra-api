import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CalculateDto {

    @ApiProperty({example: 3.50})
    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    tax: number;

    @ApiProperty({example: 50000})
    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    amount: number;
    
    @ApiProperty({example: 30})
    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    time: number;

}