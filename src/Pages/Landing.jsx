import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchFormQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    // console.log(url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchFormQuery(searchTerm));
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(searchFormQuery(searchTerm));

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
