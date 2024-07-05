import { ListItem } from "#components/ListItem";
import { List, Wrapper } from "./styled";
import { useEffect, useState } from "react";

type ItemType = { name: string; time: string; phrase: string };

export function Main() {
  const [list, setList] = useState<ItemType[]>([
    { name: "Данил", time: "20:00", phrase: "Фраза для теста" },
    {
      name: "Тест",
      time: "22:31",
      phrase: "Фраза для теста длинная очень сильноооо",
    },
    {
      name: "Данил",
      time: "22:35",
      phrase: "Абракадабра фразочка",
    },
  ]);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("https://dapanov.ru/api");
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
          <div key={index + item.name}>
            <ListItem time={item.time} name={item.name} phrase={item.phrase} />
          </div>
        ))}
      </List>
    </Wrapper>
  );
}
