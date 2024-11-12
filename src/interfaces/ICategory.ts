import IProduct from "./IProduct";

export default interface ICategory {
    id: number,
    name: string,
    description: string,
    icon?: string,
    image?: string,
    parentCategory?: ICategory,
    children?: ICategory[],
    products?: IProduct[],
    // metaTitle?: string,
    // metaDescription?: string,
}