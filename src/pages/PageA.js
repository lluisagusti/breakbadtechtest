import { useEffect } from "react";
import {
  getAllCharacters,
  getCharacterDataById,
  getCharacterDataByName,
  getCharacterQuote,
} from "../service/service";

const PageA = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("GETTING DATA...");
    // get characters
    const responseA = await getAllCharacters();
    console.log("responseA", responseA);

    // get character full data by name
    const responseB = await getCharacterDataByName("Walter+White");
    console.log("responseB", responseB);

    // get character full data by id
    const responseB2 = await getCharacterDataById(1);
    console.log("responseB2", responseB2);

    // get quote
    const responseC = await getCharacterQuote("Walter+White");
    console.log("responseC", responseC);
  };

  return (
    <div>
      <h1>Page A</h1>
      <h1>Page A</h1>
      <h1>Page A</h1>
      <h1>Page A</h1>
      <h1>Page A</h1>
      <h1>Page A</h1>
    </div>
  );
};

export default PageA;
