import { useLocation } from "react-router-dom";

export function doesURLHaveText(textToFind: string): boolean {
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  return textToFind?.includes(pathname) || textToFind?.includes(searchParams.get('text') as string);
}
