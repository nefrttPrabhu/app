import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import ItemGrid from "../components/ItemGrid";

export default function Library() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Synapse Library</h2>
      <ItemGrid items={items} />
    </div>
  );
}
