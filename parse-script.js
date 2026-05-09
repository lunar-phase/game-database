(element => {
  /** @type {Set<string>} */
  const textNodes = new Set();
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
  );

  let node;
  while (node = walker.nextNode()) {
    if (node.textContent?.trim()) {
      textNodes.add(node.textContent.trim());
    }
  }
  const chars = [...textNodes].sort().map(name =>
    `{ "id": "${name.replaceAll(/\s+/g, '-').replaceAll('.', '').toLowerCase()}", "name": "${name}" }`
  );
  console.log(`"characters": [
      ${[...chars].join(',\n      ')}
    ]`);
})($0);
