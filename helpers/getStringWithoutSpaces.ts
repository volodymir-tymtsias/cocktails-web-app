export const getStringWithoutSpaces = (str: string) => {
  return str
    .split('')
    .filter(char => char !== ' ')
    .join('');
};