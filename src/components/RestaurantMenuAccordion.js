const RestaurantMenuAccordion = (props)=>{
    console.log(props)
    return(
        <div className="bg-gray-300 shadow-md  mx-auto my-2 justify-between px-2 flex cursor-pointer">
           <span className="font-bold text-lg">{props.data?.title} ({props.data?.itemCards?.length}) </span> 
           <span> ⬇ </span>
        </div>
    );
}

export default RestaurantMenuAccordion;