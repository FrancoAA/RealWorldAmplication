import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArticleWhereUniqueInput } from "../../article/base/ArticleWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: () => ArticleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArticleWhereUniqueInput)
  @IsOptional()
  @Field(() => ArticleWhereUniqueInput, {
    nullable: true,
  })
  article?: ArticleWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  body!: string;
}
export { CommentCreateInput };
