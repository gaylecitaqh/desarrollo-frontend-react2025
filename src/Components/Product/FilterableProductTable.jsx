import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';

//import { setInitialValue } from '../../Store/features/product/productSlice.js';

//function FilterableProductTable({ products }) {


const FilterableProductTable = ({ products }) => {
  console.log('Products:', products);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      
    </div>
  );
};
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


export default function FilterProductTable(){
  return <FilterableProductTable products={PRODUCTS} />;
}
//export default FilterableProductTable;
