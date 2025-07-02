import { useQuery } from "@tanstack/react-query";

const BASE_URL =
  "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/sign/useMap2/future-cities.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNDc4MmZiYi0yMTI5LTQ3ZGQtYWM5MC0xODAxYzM5MjliNWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VNYXAyL2Z1dHVyZS1jaXRpZXMuanNvbiIsImlhdCI6MTc1MTQxODA1OCwiZXhwIjoxNzgyOTU0MDU4fQ.TK6L7GJbLN8PHji8kHSOTvpFTinKZee-0AYMTnnye5Q";

const fetchFutureCities = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch past cities");
  }
  return res.json();
};

export const useFutureCities = () => {
  return useQuery({
    queryKey: ["future-cities"],
    queryFn: fetchFutureCities,
  });
};
