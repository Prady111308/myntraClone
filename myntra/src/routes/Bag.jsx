import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import EmptyBagMeesage from "../components/EmptyBagMessage";

const Bag = () =>{

  // const item = {
  //   "id": "001",
  //       "image": "images/1.jpg",
  //       "company": "Carlton London",
  //       "item_name": "Rhodium-Plated CZ Floral Studs",
  //       "original_price": 1045,
  //       "current_price": 606,
  //       "discount_percentage": 42,
  //       "return_period": 14,
  //       "delivery_date": "10 Oct 2023",
  //       "rating": { "stars": 4.5, "count": 1400 }
  // }

    const bagItems = useSelector((state) => state.bagItems);

  return <>
    <main>
      
      <div className="bag-page">
      {bagItems.length ===0 && <EmptyBagMeesage />}
        <div className="bag-items-container">
        
          {bagItems.map((item)=><BagItem key={item.id} item={item}/>)}
        </div>
        <div className="bag-summary">
          {bagItems.length>0 && <BagSummary />}
        </div>

      </div>
    </main>
    
  </>
}

export default Bag;