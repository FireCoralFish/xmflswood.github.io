// 生日2017/12/20（要改成农历..）
export function compute () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth()
  let d = date.getDate()
  if (y === 2019 && m === 04 && d === 16) {
    return 21
  }
  return false
}
