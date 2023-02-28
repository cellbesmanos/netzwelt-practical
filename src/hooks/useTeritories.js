import { useEffect, useState } from "react";
import getAllTeritories from "../services/getAllTeritories";

export default function () {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      const res = await getAllTeritories();

      setData(res.data);
      setStatus("loaded");
    })();
  }, []);

  return [data, status];
}
