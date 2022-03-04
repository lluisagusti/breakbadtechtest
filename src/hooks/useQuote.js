import { useEffect, useState } from "react";
import { getCharacterQuote } from '../service/service'

const useQuote = name => {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => async () => {
  useEffect(() => {
    setLoading(true)
    getQuote(name)
  }, [name]);

  const getQuote = async (name) => {
    
    try {
      const res = await getCharacterQuote(name);
      if (res === "error_msg_427") setError(res);
      if (res === "error_msg_default") setError(res);
      setQuote(res.data[0] && res.data[0].quote);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [{ quote, loading, error }, () => getQuote(name)];

};

export default useQuote;