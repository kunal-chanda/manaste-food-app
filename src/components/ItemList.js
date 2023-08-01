import { IMG_LINK } from "../utils/resource";

const ItemList = (props)=>{
    //console.log(props)
    return(
        <div>
            <ul>
                {props.data?.map((item,index)=>(<li key={index} className="my-3 py-2 flex justify-between border-b-2">
                <div className="flex flex-col w-10/12">
                    <span className="font-bold">{item.card?.info?.name}</span>
                    <span className="font-semibold text-gray-700">Rs/- {(item.card?.info?.price)/100}</span>
                    <div className="font-light text-sm pr-4">{(item.card?.info?.description || " ")}</div>
                </div>
                <div className="w-2/12">
                    <button className="absolute mx-5 my-14 bottom border border-slate-500 shadow-lg px-4 py-1 rounded-md bg-white text-green-600 font-semibold text-sm hover:bg-blue-200">ADD</button>
                    <img src={IMG_LINK+item.card?.info?.imageId} alt="item" className="h-[80px] w-[90px] rounded-lg border-white mx-2"/>
                </div>    
             </li>))}
            </ul>
            <div className="line"></div>
           </div>
    );
}

export default ItemList;