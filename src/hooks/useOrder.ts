import { useState } from "react"
import { orderItem } from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<orderItem[]>([]);

    const addItem = () => {
        console.log('agregando...')
    }


    return {
        addItem
    }
}
