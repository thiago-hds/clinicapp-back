import { IsIn, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";

export class FindClientDto extends PaginationDto {
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @IsString()
  orderBy?: string;

  @IsOptional()
  @IsIn(["asc", "desc"])
  order?: "asc" | "desc";
}
