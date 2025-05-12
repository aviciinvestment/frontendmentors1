export function StringtoList(string) {
  try {
    const splitted = string
      .split("...............................")
      .map((element) => {
        return element.split("__");
      });
    return [splitted[0][1], splitted[1][1]];
  } catch (error) {
    error;
    return 0;
  }
}
