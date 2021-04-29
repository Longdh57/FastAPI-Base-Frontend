export function formatDate(dateStr) {
  if (!dateStr) {
    return ''
  }
  const date = new Date(dateStr)
  return date.toLocaleString('vi-VN')
}
