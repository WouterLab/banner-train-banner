import { EmptyItem } from "#components/EmptyItem";
import { ListItem } from "#components/ListItem";
import { Item, List, Wrapper } from "./styled";
import { useEffect, useRef, useState } from "react";

type ItemType = { name: string; time: string; phrase: string };

const emptyData = [
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
  const [mockList, setMockList] = useState(mockData);
  const [emptyList, setEmptyList] = useState(emptyData);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("https://dapanov.ru/api");
      const data = await response.json();

      if (data && data.length === 0) return;

      if (data && data.length < 5) {
        setEmptyList(emptyData.slice(0, 6 - data.length));
        setList(data);
      }

      if (data && data.length > 5) {
        const sliced = data.slice(data.length - 5, data.length);
        setList(sliced);
        listRef.current?.lastElementChild?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      }

      setMockList(mockData);
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
      <List style={{ minHeight: 180 }}>
        <Item style={{ animationDuration: `${0.3 * 1}` }}>
          <ListItem
            time={mockList[0].time}
            name={mockList[0].name}
            phrase={mockList[0].phrase}
          />
        </Item>
        <Item style={{ animationDuration: `${0.3 * 2}` }}>
          <ListItem
            time={mockList[1].time}
            name={mockList[1].name}
            phrase={mockList[1].phrase}
          />
        </Item>
      </List>
      <List ref={listRef}>
        {list.map((item, index) => (
          <Item
            key={index + item.name}
            style={{ animationDuration: `${0.3 * (index + 3)}` }}
          >
            <ListItem time={item.time} name={item.name} phrase={item.phrase} />
          </Item>
        ))}
        {list.length < 5 &&
          emptyList.map((item, index) => (
            <Item
              key={index + item.name}
              style={{ animationDuration: `${0.3 * (index + 3)}` }}
            >
              {index === emptyList.length - 1 ? (
                <ListItem
                  time={item.time}
                  name={item.name}
                  phrase={item.phrase}
                />
              ) : (
                <EmptyItem
                  time={item.time}
                  name={item.name}
                  phrase={item.phrase}
                />
              )}
            </Item>
          ))}
        {/* {emptyList.slice(0, 1).map((item, index) => (
          <Item key={index + item.name}>
            <ListItem
              time={item.time}
              name={item.name}
              phrase={item.phrase}
              itemIndex={index + 3}
            />
          </Item>
        ))} */}
      </List>
    </Wrapper>
  );
}
