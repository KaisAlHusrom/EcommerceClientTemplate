import IUser from "@/types/IUser";
import IProduct from "./IProduct";

export default interface IReview {
    id: number,
    productId: number,
    product?: IProduct,
    userId: number,
    user?: IUser,
    rating: number,
    comment: string,
}