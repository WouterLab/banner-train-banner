import { Wrapper, Letter, stylesGreen, stylesWithMargin } from "./styled";

type ListItemProps = {
  time: string;
  name: string;
  phrase: string;
};

export function ListItem({ time, name, phrase }: ListItemProps) {
  const text = time + name + " " + phrase;
  const emptyRow = "                             ";

  const wrapTextIntoLines = (text: string) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      if (words[i].startsWith("VK") && i > 0 && i < 7) {
        lines.push(currentLine.trim().padEnd(29, " "));
        currentLine = words[i] + " ";
      } else if ((currentLine + words[i]).length > 24) {
        lines.push(currentLine.trim().padEnd(29, " "));
        currentLine = words[i] + " ";
      } else {
        currentLine += words[i] + " ";
      }
    }

    if (currentLine.trim() !== "") {
      lines.push(currentLine.trim().padEnd(29, " "));
    }

    return lines;
  };

  const lines = wrapTextIntoLines(text);
  const firstLine = lines[0] || "".padEnd(29, " ");
  const secondLine = lines[1]
    ? "     " + lines[1].trim().padEnd(29, " ")
    : "".padEnd(29, " ");
  const thirdLine = lines[2]
    ? "     " + lines[2].trim().padEnd(29, " ")
    : "".padEnd(29, " ");
  const fourthLine = lines[3]
    ? "     " + lines[3].trim().padEnd(29, " ")
    : "".padEnd(29, " ");
  const fifthLine = lines[4]
    ? "     " + lines[4].trim().padEnd(29, " ")
    : "".padEnd(29, " ");

  let filledText = "";

  if (text.length < 24) filledText = firstLine;

  if (text.length > 24 && text.length < 48)
    filledText = firstLine + secondLine.slice(0, 29);

  if (text.length > 48 && text.length < 72)
    filledText = firstLine + secondLine.slice(0, 29) + thirdLine.slice(0, 29);

  if (text.length > 72 && text.length < 88)
    filledText =
      firstLine +
      secondLine.slice(0, 29) +
      thirdLine.slice(0, 29) +
      fourthLine.slice(0, 29);

  if (text.length > 88 && text.length < 120)
    filledText =
      firstLine +
      secondLine.slice(0, 29) +
      thirdLine.slice(0, 29) +
      fourthLine.slice(0, 29) +
      fifthLine.slice(0, 29);

  const greenIndexes = [0, 1, 3, 4];
  const indexesWithMargin = [4, 33, 62, 91, 120];

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
