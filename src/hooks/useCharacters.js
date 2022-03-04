import { useEffect, useState } from "react";
import { getAllCharacters } from "../service/service";

const useCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = async () => {
    
    try {
      const res = await getAllCharacters();
      if (res === "error_msg_427") setError(res);
      if (res === "error_msg_default") setError(res);
      setData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useCharacters;
