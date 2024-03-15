import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagslice";
import {GrAddCircle} from "react-icons/gr";
import {AiFillDelete} from "react-icons/ai";

const HomeItem = ({ item}) => {
  const dispatch = useDispatch();
  
  const bagItems = useSelector((state) => state.bagItems);
  const itemInBag = bagItems.indexOf(item.id) >=0;


  
  // console.log(bagItems.indexOf(item.id),item.id);

  


  
  // console.log(item);
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemInBag ?  <button
        className="btn-add-bag btn btn-danger"
        onClick={()=>dispatch(bagSliceActions.removeFromBag(item.id))}
      >
        <AiFillDelete/> Remove
      </button> : <button
        className="btn-add-bag btn btn-success"
        onClick={() => {
          dispatch(bagSliceActions.addToBag(item));
        }}
      >
        <GrAddCircle/> Add to Bag
      </button>}
      

     


    </div>
  );
};

export default HomeItem;

/** index.jsx
 * 
 * let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div className="item-container">
      <img className="item-image" src="${item.image}" alt="item image">
      <div className="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">${item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs ${item.current_price}</span>
          <span className="original-price">Rs ${item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}
 */

/** bag.jsx
 * const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

  bagSummaryElement.innerHTML = `
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹${totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  return `<div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src="../${item.image}">
    </div>
    <div className="item-right-part">
      <div className="company">${item.company}</div>
      <div className="item-name">${item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs ${item.current_price}</span>
        <span className="original-price">Rs ${item.original_price}</span>
        <span className="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">${item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}
 */
