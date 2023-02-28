export default function (teritories) {
  const teritoriesMapping = {};
  const mappedTeritories = [];

  if (!teritories) {
    return [];
  }

  for (const t of teritories) {
    // handle root teritories
    if (t.parent === null) {
      const index = mappedTeritories.push({ ...t, children: [] });
      teritoriesMapping[t.id] = mappedTeritories[index - 1];
    }

    // handle teritories that have parents we already seen
    if (teritoriesMapping[t.parent]) {
      const index = teritoriesMapping[t.parent].children.push({
        ...t,
        children: [],
      });
      teritoriesMapping[t.id] = teritoriesMapping[t.parent].children[index - 1];
    }
  }

  return mappedTeritories;
}
