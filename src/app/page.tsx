
'use client'

import { GalleryComponent } from "@/components/gallery-component"
import { Item } from "./define/Item.interface"

export default function Home() {

    const item: Item = {
        id: '01'
    }
    return (
        <GalleryComponent item={item} />
    )
}
