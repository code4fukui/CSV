export const toHieJSON = (csv) => {
  const head = csv[0];
  const list = [];
  for (let i = 1; i < csv.length; i++) {
    const d = csv[i];
    const d2 = {};
    for (let j = 0; j < head.length; j++) {
      const name = head[j];
      const path = name.split(".");
      let cur = d2;
      for (let k = 0; k < path.length - 1; k++) {
        cur = d2[path[k]];
        if (!cur) {
          cur = d2[path[k]] = {};
        }
      }
      cur[path[path.length - 1]] = d[j];
    }
    list.push(d2);
  }
  return list;
};
