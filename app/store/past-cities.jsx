import { useQuery } from "@tanstack/react-query";

const BASE_URL =
  "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/sign/useMap2/past-cities.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNDc4MmZiYi0yMTI5LTQ3ZGQtYWM5MC0xODAxYzM5MjliNWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VNYXAyL3Bhc3QtY2l0aWVzLmpzb24iLCJpYXQiOjE3NTE0Njk2ODYsImV4cCI6MTgxNDU0MTY4Nn0.yvMTildwxrLMmdJ9JaA-Jx9tuGLm2AvMnKocDdnI__s";

const fetchPastCities = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch past cities");
  }
  return res.json();
};

export const usePastCities = () => {
  return useQuery({
    queryKey: ["past-cities"],
    queryFn: fetchPastCities,
  });
};
