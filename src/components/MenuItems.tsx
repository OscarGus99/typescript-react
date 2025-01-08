import { MenuItem } from "../types"

// Nuestro Type para nuestro props.
type MenuItemProps = {
    item: MenuItem, // Vas a recibir el type de menuItem del archivo db.ts
    addItem: (item:MenuItem) => void // Puedo o no pasar este prop.
}


export const MenuItems = ({ item, addItem }: MenuItemProps) => {

    const { name, price } = item; // Se desestructura.

    return (

        <button
            onClick={()=> addItem(item)}
            className="border-2 border-s-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        >
            <p>{name}</p>
            <p className="font-black">${price}</p>

        </button>
    )
}
