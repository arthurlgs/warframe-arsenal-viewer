import { useQuery } from "@tanstack/react-query";
import type { Warframe } from "../types";

export const BASE_URL = "https://api.warframestat.us";

const fetchWarframes = async (): Promise<Warframe[]> => {
  const response = await fetch(`${BASE_URL}/warframes`);

  if (!response.ok) {
    throw new Error("Failed to conntect to the Lotus network.");
  }

  const data = (await response.json()) as Array<
    Warframe & { productCategory: string } // Solution to not have to use any[], since the api returns way too much info at once.
  >;

  const cleanData: Warframe[] = data.filter(
    (item) => item.productCategory === "Suits", // Filters for only warframes
  );

  return cleanData.sort((a, b) => a.name.localeCompare(b.name));
};

export const useWarframes = () => {
  return useQuery({
    queryKey: ["warframes"],
    queryFn: fetchWarframes,
    staleTime: 1000 * 60 * 30,
  });
};

export const useWarframe = (uniqueName: string | undefined) => {
  const { data: allFrames, isLoading, isError } = useWarframes();

  const specificFrame = allFrames?.find(
    (frame) => frame.uniqueName === uniqueName,
  );

  return {
    data: specificFrame,
    isLoading,
    isError,
  };
};
