const mathjaxNotationRegex = /\\[(]|\\[)]/g;

export const deleteMathJaxNotation = (text) =>
  text.replace(mathjaxNotationRegex, "");
