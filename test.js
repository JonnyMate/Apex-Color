const newHex = () => {
  return `#${Math.random()
    .toString(16)
    .slice(2, 8)}`;
};

console.log(newHex());
