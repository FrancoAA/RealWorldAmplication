import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../../article/base/Article";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
@ObjectType()
class Comment {
  @ApiProperty({
    required: false,
    type: () => Article,
  })
  @ValidateNested()
  @Type(() => Article)
  @IsOptional()
  article?: Article | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  body!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Comment };
