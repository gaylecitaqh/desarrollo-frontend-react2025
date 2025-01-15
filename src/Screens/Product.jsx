//import Logo from "../Components/Home/Logo.jsx"
import { useSelector, useDispatch } from 'react-redux'
import OpenLink from "../Components/Core/OpenLink.jsx"

import Body from "../Components/Home/Body.jsx"
import Footer from "../Components/Home/Footer.jsx"
//import Github from "../Components/Home/Github.jsx";

import viteLogo from '../assets/vite.svg';
import reactLogo from "../assets/react.svg";
import GithubLogo from '../assets/github-code-source.svg';

import FilterableProductTable from "../Components/Product/FilterableProductTable.jsx"
import ProductCategoryRow from "../Components/Product/ProductCategoryRow.jsx"
import ProductRow from "../Components/Product/ProductRow.jsx"
import ProductTable from "../Components/Product/ProductTable.jsx"
import SearchBar from "../Components/Product/SearchBar.jsx"



const Product = () =>{
    
    return(
        <div><span>Count value: {count}</span>
            <div>
                
            <OpenLink redirectURL="https://vite.dev" LogoImage={viteLogo}></OpenLink>
            <OpenLink redirectURL="https://react.dev" LogoImage={reactLogo}></OpenLink>
            <OpenLink redirectURL="https://github.com/gaylecitaqh/desarrollo-frontend-react2025" LogoImage={GithubLogo}></OpenLink>
                <Body>

                    <FilterableProductTable>
                        <SearchBar></SearchBar> 
                        <ProductTable>
                            <ProductCategoryRow></ProductCategoryRow>    
                            <ProductRow></ProductRow>    
                        </ProductTable>
                    </FilterableProductTable>    
                        
                      
                </Body> 

                <Footer></Footer> 
            </div>
        </div>
    );
};

export default Product;