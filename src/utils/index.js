function getType(value){
  return Object.prototype.toString.call(value)
}
export function isNumber(value){
  return getType(value) === "[object Number]"
}