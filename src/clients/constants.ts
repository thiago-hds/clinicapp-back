export const ALLOWED_CLIENT_ORDER_FIELDS = [
  "firstName",
  "cpf",
  "dateOfBirth",
  "createdAt",
] as const;

export type ClientOrderField = (typeof ALLOWED_CLIENT_ORDER_FIELDS)[number];
