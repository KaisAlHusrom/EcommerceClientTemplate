import IUser from "./IUser";

interface ITestimonial {
    id: number,
    user: IUser,
    message: string,
    rate: number,
}

export default ITestimonial