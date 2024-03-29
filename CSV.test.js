import * as t from "https://deno.land/std/testing/asserts.ts";
import { CSV } from "./CSV.js";

Deno.test("addBOM", () => {
  t.assertEquals(CSV.addBOM("a"), "\ufeff" + "a");
  t.assertEquals(CSV.addBOM(null), null);
});
Deno.test("removeBOM", () => {
  t.assertEquals(CSV.removeBOM("\ufeff" + "a"), "a");
  t.assertEquals(CSV.removeBOM(null), null);
});
Deno.test("fetchJSON", async () => {
  t.assertEquals(await CSV.fetchJSON("test.csv"), [{ a: "1", b: "2" }]);
});
Deno.test("fetchJSON default data", async () => {
  t.assertEquals(await CSV.fetchJSON("test2.csv", []), []);
});
