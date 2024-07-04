import { useEffect, useState } from "react";
import { Wrapper, Letter, Divider } from "./styled";

type ListItemProps = {
  time: string;
  name: string;
  phrase: string;
  flipped: number;
};

export function ListItem({ time, name, phrase, flipped }: ListItemProps) {
  const text = time + " " + name + " " + phrase;
  const [flippedCard, setFlippedCard] = useState(false);
  const totalLetters = 33;
  const filledText = text.padEnd(totalLetters, " ");

  useEffect(() => {
    setFlippedCard(true);

    setTimeout(() => setFlippedCard(false), 500);
  }, [flipped]);

  return (
    <Wrapper>
      {filledText.split("").map((char, index) => (
        <Letter key={index} className={flippedCard ? "flipped" : ""}>
          {char}
          <Divider />
        </Letter>
      ))}
    </Wrapper>
  );
}
