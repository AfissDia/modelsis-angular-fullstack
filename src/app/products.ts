import { TypeProduct } from "./typeProduct";

export interface Products {
    id: number,
    name: string,
    date: Date;
    typeProduct: TypeProduct
}