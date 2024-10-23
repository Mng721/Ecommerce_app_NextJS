export interface Product {
    createdAt: Date;
    name: string;
    avatar: string;
    price: string | number;
    id: number;
    sale?: number | string | null;
    reviewCount?: number | null;
    listColor?: string[] | null;
    salePrice?: string | number | null;
    rating?: number | null | string;
}