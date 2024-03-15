import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bagItems);

  const [bagSummary,updateBagSummary] = useState({
    totalItem: 0,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 99,
    convenienceFee:99
  })

  // const bagSummary = {
    
    
  // };
  useEffect(()=>{
    let bagSum={totalItem: 0,
      totalMRP: 0,
      totalDiscount: 0,
      finalPayment: 99,
      convenienceFee:99}

    bagSum.totalItem = bagItems.length;
    bagItems.map((item)=>{
      bagSum.totalMRP += item.original_price;
      bagSum.totalDiscount += item.original_price - item.current_price;
      bagSum.finalPayment += item.current_price
    })
  //  console.log(bagSum);
   updateBagSummary(bagSum);
  },[bagItems]);

  
  return (
    <div className="bagSummary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{bagSummary.convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
