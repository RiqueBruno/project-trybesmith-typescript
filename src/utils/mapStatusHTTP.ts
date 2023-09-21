export default function mapStatusHTTP(status: string): number {
  const statusMap: Record<string, number> = {
    OK: 200,
    CREATED: 201,
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  };
  return statusMap[status] ?? 500;
}