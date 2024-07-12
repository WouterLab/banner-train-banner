import { Wrapper, Letter, stylesGreen, stylesWithMargin } from "./styled";

type EmptyItemProps = {
  time: string;
  name: string;
  phrase: string;
  oneRow?: boolean;
};

export function EmptyItem({ time, name, phrase, oneRow }: EmptyItemProps) {
  const text = name !== "" ? time + name + " " + phrase : time + phrase;

  const itemsInRow = 33;
  const emptyRow = "                                 ";

  const wrapTextIntoLines = (text: string) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (lines.length > 0) {
        if (
          5 +
            currentLine.length +
            word.length +
            (currentLine.length > 0 ? 1 : 0) <=
          itemsInRow
        ) {
          currentLine += (currentLine.length > 0 ? " " : "") + word;
        } else {
          lines.push(currentLine.padEnd(itemsInRow, " "));
          currentLine = word;
        }
      } else {
        if (
          currentLine.length + word.length + (currentLine.length > 0 ? 1 : 0) <=
          itemsInRow
        ) {
          currentLine += (currentLine.length > 0 ? " " : "") + word;
        } else {
          lines.push(currentLine.padEnd(itemsInRow, " "));
          currentLine = word;
        }
      }
    }

    if (currentLine.length > 0) {
      lines.push(currentLine.padEnd(itemsInRow, " "));
    }

    return lines;
  };

  const lines = wrapTextIntoLines(text);
  const firstLine = lines[0] || "".padEnd(itemsInRow, " ");
  const secondLine = lines[1]
    ? "     " + lines[1].trim().padEnd(itemsInRow, " ")
    : "".padEnd(itemsInRow, " ");
  const thirdLine = lines[2]
    ? "     " + lines[2].trim().padEnd(itemsInRow, " ")
    : "".padEnd(itemsInRow, " ");
  const fourthLine = lines[3]
    ? "     " + lines[3].trim().padEnd(itemsInRow, " ")
    : "".padEnd(itemsInRow, " ");
  const fifthLine = lines[4]
    ? "     " + lines[4].trim().padEnd(itemsInRow, " ")
    : "".padEnd(itemsInRow, " ");

  let filledText = firstLine;

  if (firstLine.replace(/\s/g, "") && secondLine.replace(/\s/g, ""))
    filledText = firstLine + secondLine.slice(0, itemsInRow);

  if (
    firstLine.replace(/\s/g, "") &&
    secondLine.replace(/\s/g, "") &&
    thirdLine.replace(/\s/g, "")
  )
    filledText =
      firstLine +
      secondLine.slice(0, itemsInRow) +
      thirdLine.slice(0, itemsInRow);

  if (
    firstLine.replace(/\s/g, "") &&
    secondLine.replace(/\s/g, "") &&
    thirdLine.replace(/\s/g, "") &&
    fourthLine.replace(/\s/g, "")
  )
    filledText =
      firstLine +
      secondLine.slice(0, itemsInRow) +
      thirdLine.slice(0, itemsInRow) +
      fourthLine.slice(0, itemsInRow);

  if (
    firstLine.replace(/\s/g, "") &&
    secondLine.replace(/\s/g, "") &&
    thirdLine.replace(/\s/g, "") &&
    fifthLine.replace(/\s/g, "")
  )
    filledText =
      firstLine +
      secondLine.slice(0, itemsInRow) +
      thirdLine.slice(0, itemsInRow) +
      fourthLine.slice(0, itemsInRow) +
      fifthLine.slice(0, itemsInRow);

  const greenIndexes = [0, 1, 3, 4];
  const indexesWithMargin = [4, 37, 70, 103];

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
      {!oneRow &&
        emptyRow.split("").map((char, index) => (
          <Letter
            key={index}
            className={`${greenIndexes.includes(index) ? stylesGreen : ""} ${
              indexesWithMargin.includes(index) ? stylesWithMargin : ""
            }`}
          >
            <span>{char}</span>
          </Letter>
        ))}
      {!oneRow &&
        emptyRow.split("").map((char, index) => (
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
