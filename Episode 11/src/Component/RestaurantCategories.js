import ItemList from "./ItemList";



const RestaurantCategories = ({ResCategori})=> {
    
     const {title,itemCards} = ResCategori

     console.log(title)

    return(
        <div>
            {/* Header of Accordian */}
            <div className="w-6/12 mx-auto my-3 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between font-bold">

            <span>{title} ({itemCards?.length})</span>
            <span>🔽  </span>
            </div>

            {/* Body of Accordian */}
             
            <ItemList ItemLists = {itemCards}/>
        
            </div>

            
        </div>
    )
};

export default RestaurantCategories;