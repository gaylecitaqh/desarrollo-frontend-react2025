import './App.css'
import { useState } from 'react';

//import Default from "./Components/Default.jsx"
/*import Logo from "./Components/Home/Logo.jsx"
import Body from "./Components/Home/Body.jsx"
import Footer from "./Components/Home/Footer.jsx"
*/
/*import Home from './Screens/Home.jsx';
import Counter from "./Components/Counter/Counter.jsx";*/
/*import Product from './Screens/Product.jsx';
import FilterableProductTable from "./Components/Product/FilterableProductTable.jsx"
*/
/*import ProductCategoryRow from "../Components/Product/ProductCategoryRow.jsx"
import ProductRow from "../Components/Product/ProductRow.jsx"
import ProductTable from "../Components/Product/ProductTable.jsx"
import SearchBar from "../Components/Product/SearchBar.jsx"

*/


import Navigator from './Components/Navigation/Navigator.jsx';
import Router from './Components/Navigation/Router.jsx';

function App() {
  

  return (
    <>
      {/*<Home />
      <Counter />
      <Product >
      <FilterableProductTable />  
      </Product>*/}
      <Navigator />
      <Router />
    </>
  )
}


/*export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}*/
export default App;



