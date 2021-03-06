import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";

import data from "./data.json";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: "",
        };
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "Lowest"
                        ? a.price > b.price
                            ? 1
                            : -1
                        : sort === "Highest"
                        ? a.price < b.price
                            ? 1
                            : -1
                        : a._id > b._id
                        ? 1
                        : -1
                ),
        }));
    };

    filterProducts = (event) => {
        //TODO
        console.log("called", event.target.value);
        if (event.target.value === "") {
            this.setState({
                size: event.target.value,
                products: data.products,
            });
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter((product) =>
                    product.availableSizes.includes(event.target.value)
                ),
            });
        }
    };

    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">Amazon-Mini: React Shopping Cart</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Filter
                                count={this.state.products.length}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            />
                            <Products products={this.state.products} />
                        </div>
                        <div className="sidebar">Cart Items</div>
                    </div>
                </main>
                <footer>All Right Reserved</footer>
            </div>
        );
    }
}

export default App;
