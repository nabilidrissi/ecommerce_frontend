import {FileImage} from './file-image.model';

export interface Product{
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileImage[]

}
