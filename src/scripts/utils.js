export function getTime (format, time) {
  let y = time.getFullYear()
  format = format.replace(/YYYY/, y)
  let m = time.getMonth()
  m = m < 10 ? `0${m}` : m
  format = format.replace(/MM/, m)
  let d = time.getDate()
  d = d < 10 ? `0${d}` : d
  format = format.replace(/DD/, d)

  return format
}
