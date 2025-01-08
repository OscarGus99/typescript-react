import { MenuItems } from "./components/MenuItems"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder";


function App() {



  // console.log(menuItems);

  // Llamamos nuestro UseHook
  const { addItem } = useOrder();


  return (
    <>
      <header className="bg-teal-700 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">

          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">

            {/* COMO HACER UNA LISTA CON MAP  */}

            {
              menuItems.map(item => (

                <MenuItems
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />

              ))
            }
          </div>




        </div>


        <div>
          <h2>Consumo</h2>

        </div>
      </main>




    </>
  )
}

export default App
