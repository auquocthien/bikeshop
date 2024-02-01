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