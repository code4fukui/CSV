# CSV

A manipulator CSV in JavaScript ES module

## Usage

```JavaScript
import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const url = "https://codeforkosen.github.io/newcollege/newcollege202208.csv";
const csv = await CSV.fetch(url);
const json = CSV.toJSON(csv);
console.log(json);
```

## utils

### toHieJSON

to make data with hierarchy from csv

```JavaScript
import { toHieJSON } from "https://code4fukui.github.io/CSV/toHieJSON.js";

const csv = [
  ["a.A", "a.B"],
  [10, 11],
  [20, 21],
];
const json = CSV.toHieJSON(csv);
console.log(json);
/*
[
  { a: { A: 10, B: 11 } },
  { a: { A: 20, B: 21 } },
]
*/
```
