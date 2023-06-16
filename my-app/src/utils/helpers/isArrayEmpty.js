export function isArrayEmpty(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  return false;
}