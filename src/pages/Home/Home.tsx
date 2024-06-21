import { Wrapper } from "./styled";
import { useEffect, useState } from "react";

export function Home() {
  const [list, setList] = useState<{ name: string; time: string }[]>([]);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("http://localhost:3000/names");
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
      <div>
        <h1>Names List</h1>
        <ul>
          {list.map((item, index) => (
            <li key={index + item.name}>
              {item.name} {item.time}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
