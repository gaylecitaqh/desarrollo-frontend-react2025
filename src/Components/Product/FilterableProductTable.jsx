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

export default FilterableProductTable;
