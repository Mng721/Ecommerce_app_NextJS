import { z } from "zod";

export const ProductSchema = z.object(
    {
        name: z.string().max(256).min(1),
        avatar: z.string().max(999).min(1),
        price: z.number().min(1)
    }
)