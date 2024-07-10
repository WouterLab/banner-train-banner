import { EmptyItem } from "#components/EmptyItem";
import { ListItem } from "#components/ListItem";
import { List, Wrapper } from "./styled";
import { useEffect, useRef, useState } from "react";

type ItemType = { name: string; time: string; phrase: string };

const mockData = [
  {
    time: "08:37",
    name: "Наша птичка.",
    phrase: "Не перелетная, а цыпа улётная",
  },
  {
    time: "09:25",
    name: "ДЫМ ДЫМЫЧ.",
    phrase: "Не сервелат,     а счастья аромат",
  },
];

const emptyList = [
  {
    time: "",
    name: "",
    phrase: "",
  },
  {
    time: "",
    name: "",
    phrase: "",
  },
  {
    time: "",
    name: "",
    phrase: "",
  },
  {
    time: "",
    name: "",
    phrase: "",
  },
  {
    time: "",
    name: "",
    phrase: "",
  },
  {
    time: "",
    name: "",
    phrase: "",
  },
];

export function Main() {
  const [list, setList] = useState<ItemType[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("https://dapanov.ru/api");
      const data = await response.json();
      if (data && data.length === 0) return;

      if (data && data.length > 5) {
        const sliced = data.slice(data.length - 5, data.length);
        setList(sliced);
        listRef.current?.lastElementChild?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      }

      setList(data);
      listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    };

    fetchNames();
    const interval = setInterval(fetchNames, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [list]);

  return (
    <Wrapper>
      <List ref={listRef} style={{ minHeight: 180 }}>
        <div>
          <ListItem
            time={mockData[0].time}
            name={mockData[0].name}
            phrase={mockData[0].phrase}
          />
        </div>
        <div>
          <ListItem
            time={mockData[1].time}
            name={mockData[1].name}
            phrase={mockData[1].phrase}
          />
        </div>
      </List>
      <List ref={listRef}>
        {list.length < 5 &&
          emptyList.map((item, index) => (
            <div key={index + item.name}>
              <EmptyItem
                time={item.time}
                name={item.name}
                phrase={item.phrase}
              />
            </div>
          ))}
        {list.map((item, index) => (
          <div key={index + item.name}>
            <ListItem time={item.time} name={item.name} phrase={item.phrase} />
          </div>
        ))}
        {emptyList.slice(0, 1).map((item, index) => (
          <div key={index + item.name}>
            <ListItem time={item.time} name={item.name} phrase={item.phrase} />
          </div>
        ))}
      </List>
    </Wrapper>
  );
}
