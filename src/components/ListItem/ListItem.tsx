import { Wrapper, Letter, stylesGreen, stylesWithMargin } from "./styled";

type ListItemProps = {
  time: string;
  name: string;
  phrase: string;
};

export function ListItem({ time, name, phrase }: ListItemProps) {
  const text = time + name + " " + phrase;
  const totalLetters = 60;
  const emptyRow = "                              ";

  let filledText = text.padEnd(totalLetters, " ");

  if (filledText.length > 30) {
    let firstLine = filledText.slice(0, 30);
    let secondLine = filledText.slice(30, 60);

    if (firstLine[29] !== " " && secondLine[0] !== " ") {
      const lastSpaceIndex = firstLine.lastIndexOf(" ");
      if (lastSpaceIndex !== -1) {
        secondLine = (
          "     " +
          firstLine.slice(lastSpaceIndex + 1) +
          secondLine
        ).slice(0, 30);

        firstLine = firstLine.slice(0, lastSpaceIndex).padEnd(30, " ");
      }
    }

    filledText = (firstLine + secondLine).padEnd(totalLetters, " ");
  }

  const greenIndexes = [0, 1, 3, 4];
  const indexesWithMargin = [4, 34];

  return (
    <Wrapper>
      {filledText.split("").map((char, index) => (
        <Letter
          key={index}
          className={`${greenIndexes.includes(index) ? stylesGreen : ""} ${
            indexesWithMargin.includes(index) ? stylesWithMargin : ""
          }`}
        >
          <span>{char}</span>
        </Letter>
      ))}
      {emptyRow.split("").map((char, index) => (
        <Letter
          key={index}
          className={`${greenIndexes.includes(index) ? stylesGreen : ""} ${
            indexesWithMargin.includes(index) ? stylesWithMargin : ""
          }`}
        >
          <span>{char}</span>
        </Letter>
      ))}
    </Wrapper>
  );
}
