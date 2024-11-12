import IReview from "@/interfaces/IReview"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReviewsAverage(reveiws: IReview[], base: number) : number {
  return Number(reveiws.map(review => review.rating).reduce((sum, rating) => sum + rating)) / base;
}
