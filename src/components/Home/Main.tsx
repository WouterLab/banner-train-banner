import { ListItem } from "#components/ListItem";
import { List, Wrapper } from "./styled";
import { useEffect, useState } from "react";

export function Main() {
  const [list, setList] = useState<{ name: string; time: string }[]>([]);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("https://danilpanov.ru/api/main");
      const data = await response.json();
      if (data.length > list.length) {
        setList(data[data.length - 1]);
      }
      setList(data);
    };

    fetchNames();
    const interval = setInterval(fetchNames, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <List>
        {list.map((item, index) => (
          <ListItem key={index + item.name}>
            {item.time} {item.name}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
