const obj = {
  val1: "abc",
  val2: "def"
};

for (const key in obj) {
  console.log(key, obj[key]);
}

const keys = Object.keys(obj);
console.log(keys);

const values = Object.keys(obj).map(function(key) {
  return obj[key];
});

console.log(values);
