export interface CustomErrorResponse extends Error {
  status?: number;
  errors?: Record<string, string[]>;
}
