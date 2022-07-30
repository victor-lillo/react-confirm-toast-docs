
export interface Item {
    _id: string
    category: string
    title: string
}

export interface Category {
    _id: string,
    path: string,
}

export interface CategoryModified extends Category {
    pathArray: string[]
}
