# CSV

JavaScript ESモジュール用のCSV操作ライブラリです。

## 使い方

```JavaScript
import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const url = "https://codeforkosen.github.io/newcollege/newcollege202208.csv";
const csv = await CSV.fetch(url);
const json = CSV.toJSON(csv);
console.log(json);
```

## ユーティリティ

### toHieJSON

CSVから階層構造を持つデータを作成します。

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

## ライセンス

MIT License
