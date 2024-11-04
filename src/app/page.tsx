'use client'

import { GalleryComponent } from "@/components/gallery-component"
import { BookItem } from "@define/book-item.interface"

export default function Home() {

    const item: BookItem = {
        id: '01'
    }
    return (
        <GalleryComponent item={item} />
    )
}
