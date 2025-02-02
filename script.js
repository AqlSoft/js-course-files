const a = [1, 2, 3, 4, 5]
const b = a.slice() // [1, 2, 3, 4, 5]
b
const c = a.slice(2) // [ 3, 4, 5]
c
const d = a.slice(2, 4) // [3, 4]
d
const e = a.slice(-2)
e

const f = a.splice(2, 2, [7,8])
a
f