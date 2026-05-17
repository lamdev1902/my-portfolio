export function validateContact(body: any) {
  if (!body?.name || !body?.email || !body?.message) {
    return false;
  }
  return true;
}