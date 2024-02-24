import { useLocation } from 'react-router-dom';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface DecodedToken extends JwtPayload {
  roles: string[];
}

export function doesURLHaveText(textToFind: string): boolean {
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  return textToFind?.includes(pathname) || textToFind?.includes(searchParams.get('text') as string);
}
export function isAdmin() {
  const token = localStorage.getItem('token');

  if (token) {
    const payload = jwtDecode<DecodedToken>(token);
    const result = payload.roles.includes('SYSADMIN');

    return result;
  }
}
export function logout() {
  return localStorage.removeItem('token');
}
export function formatDate(dateString: any) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
}

export  function getAccessToken(){
  return localStorage.getItem('token')
}
