import { useEffect, useState } from "react";
import { getCharacterQuote } from '../service/service'

const useQuote = name => {
  // states
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => async () => {
  useEffect(() => {
    getQuote(name)
  }, [name]);

  const getQuote = async (name) => {
    setLoading(true);
    try {
      const res = await getCharacterQuote(name);
      setQuote(res.data[0] && res.data[0].quote);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [{ quote, loading, error }, (name) => getQuote(name)];

};

export default useQuote;