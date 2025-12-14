export class PaginatedResponseDto<T> {
  items: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };

  constructor(items: T[], total: number, page: number, limit: number) {
    const totalPages = Math.ceil(total / limit);

    this.items = items;
    this.pagination = {
      total,
      page,
      limit,
      totalPages,
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    };
  }
}
