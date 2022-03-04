import { useEffect, useState } from "react";
import { getCharacterDataByName } from "../service/service";

const useCharacter = name => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true)
    getData(name)
  }, [name]);

  const getData = async (name) => {
    try {
      const res = await getCharacterDataByName(name);
      if (res === "error_msg_427") return setError(res);
      if (res === "error_msg_default") return setError(res);
      setData(res.data[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  
  return { data, loading, error };
};

export default useCharacter;