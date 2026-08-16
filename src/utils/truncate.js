export function truncate(text, length = 35) {
  if (text.length <= length) return text;

  return text.substring(0, length) + '...';
}