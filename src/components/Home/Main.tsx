import { ListItem } from "#components/ListItem";
import { List, Wrapper } from "./styled";
import { useEffect, useRef, useState } from "react";

type ItemType = { name: string; time: string; phrase: string };

export function Main() {
  const [list, setList] = useState<ItemType[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("https://dapanov.ru/api");
      const data = await response.json();
      if (data.length > list.length) {
        setList(data[data.length - 1]);
      }
      setList(data);
      listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    };

    fetchNames();
    const interval = setInterval(fetchNames, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <List ref={listRef}>
        {list.map((item, index) => (
          <div key={index + item.name}>
            <ListItem time={item.time} name={item.name} phrase={item.phrase} />
          </div>
        ))}
      </List>
    </Wrapper>
  );
}
