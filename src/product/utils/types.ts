export type CreateProductType = {
    name: string
    desc: string
    sku: string
    price: number
}

export type CreateProductCategoryType = {
    name: string
    desc: string
}

export type CreateProductInventoryType = {
    quantity: number
}

export type UpdateProductParam = {
    name?: string
    desc?: string
    sku?: string
    price?: number
    quantity?: number
}