import ItemList from "./ItemList";

const RestaurantCategories = ({ ResCategori,showItem,setShowItem }) => {
 
  const { title, itemCards } = ResCategori;

  //  console.log(title)

  const handleClick = () => {
    setShowItem()
  };

  return (
    <div>
      {/* Header of Accordian */}
      <div className="w-6/12 mx-auto my-3 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {title} ({itemCards?.length})
          </span>
          <span>🔽 </span>
        </div>

        {/* Body of Accordian */}

        {showItem && <ItemList ItemLists={itemCards} /> }
      </div>
    </div>
  );
};

export default RestaurantCategories;
