import { useEffect, useState } from "react";
import { Page, fetchData } from "./data";
import Pages from "./components/Pages";

function App() {
  const [data, setData] = useState<Page[]>([]);
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setData(data);
    }
    getData();
  }, []);
  return (
    <div className="p-2">
      <h1>Atlassian Interview with Terence</h1>
      <Pages pages={data} />
    </div>
  );
}

export default App;
