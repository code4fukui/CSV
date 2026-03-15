# CSV

JavaScriptのES moduleでCSVを操作するツールです。

## 機能

- CSV形式の読み書き
- JSONとの相互変換
- CSV内部の階層構造を解析し、JSON形式に変換する `toHieJSON` 関数

## 使い方

```javascript
import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const url = "https://codeforkosen.github.io/newcollege/newcollege202208.csv";
const csv = await CSV.fetch(url);
const json = CSV.toJSON(csv);
console.log(json);
```

## toHieJSON

CSV内部の階層構造をJSON形式に変換します。

```javascript
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