import * as t from "https://deno.land/std/testing/asserts.ts";
import { toHieJSON } from "./toHieJSON.js";

Deno.test("simple", () => {
  t.assertEquals(toHieJSON([
    ["a", "b", "b.c", "b.d"],
    ["1",    , "2",   "3"  ],
  ]), [
    { a: "1", b: { c: "2", d: "3" } }
  ])
});
