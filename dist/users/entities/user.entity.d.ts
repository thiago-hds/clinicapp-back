export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    beforeInsert(): void;
}
