import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimestamp(timestampStr: string): string {
  // Convert the timestamp string to a Date object
  const timestamp: Date = new Date(timestampStr);

  // Get the current time
  const currentTime: Date = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference: number = currentTime.getTime() - timestamp.getTime();

  // Calculate the time difference in days, hours, and minutes
  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes: number = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Build the human-readable representation
  if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return '1 day ago';
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return '1 hour ago';
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return '1 minute ago';
  } else {
    return 'Just now';
  }
}