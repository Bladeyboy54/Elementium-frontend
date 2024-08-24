export const shortenText = (inputText: string, maxChar: number): string => {
  if (inputText.length > maxChar) {
    return inputText.substring(0, maxChar) + "...";
  } else {
    return inputText;
  }
};
