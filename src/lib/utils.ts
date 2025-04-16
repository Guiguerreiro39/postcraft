import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const noop = () => undefined;

export const notReachable = (_: never): never => {
  throw new Error(`Impossible state reached`);
};
