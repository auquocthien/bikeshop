export type CreateUserType = {
    username: string
    password: string
}

export type UpdateUserType = {
    username: string
    password: string
}

export type CreateProfiletype = {
    firstName: string
    lastName: string
    dob: string
    numberPhone: string
}

export type CreatePostType = {
    title: string
    content: string
}

export type CreateUserAddressType = {
    addressLine1: string
    addressLine2?: string
    city: string
    postalCode: string
    country: string
}