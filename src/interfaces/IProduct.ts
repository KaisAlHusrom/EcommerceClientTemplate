import ICategory from "./ICategory";
import IImage from "./IImage";
import IReview from "./IReview";

export default interface IProduct {
    id: number,
    name: string,
    price: number,
    mainImage: string,
    images?: IImage[],
    shortDescription: string,
    longDescription: string,
    reviews?: IReview[],
    categories?: ICategory[],
    stockNumber: number,
}