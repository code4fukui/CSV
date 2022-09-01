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
