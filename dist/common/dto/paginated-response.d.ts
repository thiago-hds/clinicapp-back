export declare class PaginatedResponseDto<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    constructor(items: T[], total: number, page: number, limit: number);
}
