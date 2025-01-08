import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);

    //? Funcion de Flecha -->
    const addItem = (item: MenuItem) => {

        //? RESPIRACION PARA EVITAR QUE SE DUPLIQUE UN VALOR SELECCIONADO

        const itemExist = order.find(orderItem => orderItem.id == item.id);

        if (itemExist) {

            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } : //Se creo una variable para sumar  el orderItem DEL STATE "order"
                orderItem
            );
            
            setOrder(updateOrder)


        } else {
            // Se cambio su type a OrderItem  ya que antes estaba con MenuItem
            const newItem: OrderItem = { ...item, quantity: 1 };

            setOrder([...order, newItem]);
        }


    }


    return {
        addItem
    }
}
