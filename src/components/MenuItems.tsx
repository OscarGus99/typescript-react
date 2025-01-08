import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem?: () => void // Puedo o no pasar este prop
}


export const MenuItems = ({ item }: MenuItemProps) => {

    const { name, price } = item;

    return (

        <button
            className="border-2 border-s-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        >
            <p>{name}</p>
            <p className="font-black">${price}</p>

        </button>
    )
}
