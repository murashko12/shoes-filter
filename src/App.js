import { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recomended from './Recomended/Recomended';
import Sidedar from './Sidebar/Sidebar';

// Database
import products from './db/data'
import Card from './components/Card';

function App() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    
    // ------------------- Input Filter -------------------
    
    const handleInpurChange = (e) => setQuery(e.target.value)
    const filteredItems = products.filter(product => 
        product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
    )
    
    // ------------------- Radio Filter -------------------
    const handleChange = (e) => setSelectedCategory(e.target.value)
    
    // ------------------- Buttons Filter -------------------
    const handleClick = (e) => setSelectedCategory(e.target.value)

    // ------------------- Main Filter -------------------
    function filteredData(products, selected, query) {
        let filteredProducts = products

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems
        }
        
        // Selected Filter
        if (selected) {
            filteredProducts = filteredProducts
                .filter(
                    ({ category, color, company, newPrice, title }) => (
                        category === selected ||
                        color === selected || 
                        company === selected ||
                        newPrice === selected ||
                        title === selected 
                    )
                )
        }
        return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
            <Card 
                key={Math.random()} 
                img={img}
                title = {title}
                star = {star}
                reviews = {reviews}
                prevPrice = {prevPrice}
                newPrice = {newPrice}
            />
        ))
    }

    const result = filteredData(products, selectedCategory, query)

    return (
        <>
            <Sidedar />
            <Navigation/>
            <Recomended/>
            <Products/>
        </>
    );
}

export default App;
