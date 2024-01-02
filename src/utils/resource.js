export const IMG_LINK =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const IMG_LOGO =
  "https://icon-library.com/images/order-food-online-icon/order-food-online-icon-20.jpg";

export const MENU_API = 
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4791025&lng=88.37370639999999&restaurantId="


export const MENU_API_KOL = 
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4791025&lng=88.37370639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4791025&lng=88.37370639999999&page_type=DESKTOP_WEB_LISTING"


 
  //Function to find the nth prime number
export function findNthPrime(n) {
  //Function to check the number is prime
function isPrime(num) {
   if (num <= 1) {
     return false;
   }
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) {
      return false;
     }
   }
   return true;
  }  

   let count = 0;
   let num = 2;
   while (count < n) {
     if (isPrime(num)) {
      count++;
     }
     num++;
   }
   return num - 1;
  }



