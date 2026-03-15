# CSV

JavaScriptのES moduleでCSVを操作するツール。

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

## ライセンス

MIT License