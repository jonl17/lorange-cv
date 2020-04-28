export const typewriter = (node, { speed = 50 }) => {
  const valid = (
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE
  );

  if (!valid) return {};
  console.log(node)
  const text = node.textContent;
  const duration = text.length * speed;

  return {
    duration,
    tick: (t, u) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}