const mathjaxNotationRegex = /\\[(]|\\[)]/g;

export const deleteMathJaxNotation = (text: string) =>
  text.replace(mathjaxNotationRegex, "");
