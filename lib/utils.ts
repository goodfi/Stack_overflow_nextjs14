import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsPast: number = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  }
  // Dni
  if (secondsPast < 2592000) {
    // Mniej niż 30 dni
    return `${Math.floor(secondsPast / 86400)} days ago`;
  }
  // Miesiące
  if (secondsPast < 31536000) {
    // Mniej niż 12 miesięcy
    return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  // Lata
  return `${Math.floor(secondsPast / 31536000)} years ago`;
};

export const formatAndDivideNumber = (num: number): string => {
  let result;

  if (num >= 1e15) {
    // Kwadryliony
    result = Math.floor((num / 1e15) * 10) / 10;
    return result + 'Q';
  } else if (num >= 1e12) {
    // Tryliony
    result = Math.floor((num / 1e12) * 10) / 10;
    return result + 'T';
  } else if (num >= 1e9) {
    // Miliardy
    result = Math.floor((num / 1e9) * 10) / 10;
    return result + 'B';
  } else if (num >= 1e6) {
    // Miliony
    result = Math.floor((num / 1e6) * 10) / 10;
    return result + 'M';
  } else if (num >= 1e3) {
    // Tysiące
    result = Math.floor((num / 1e3) * 10) / 10;
    return result + 'K';
  } else {
    return num.toString(); // Dla liczb mniejszych niż 1000
  }
};
