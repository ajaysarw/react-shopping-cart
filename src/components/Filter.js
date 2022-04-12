import React, { Component } from "react";

export default class Filter extends Component {
    sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    sortOrder = ["Lowest", "Highest"];

    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>

                <div className="filter-sort">
                    Sort Order{" "}
                    <select
                        value={this.props.sort}
                        onChange={this.props.sortProducts}
                    >
                        <option value=""> Latest </option>
                        {this.sortOrder.map((ord, index) => (
                            <option value={ord} key={index}>
                                {" "}
                                {ord}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-size">
                    Filter{" "}
                    <select
                        value={this.props.size}
                        onChange={this.props.filterProducts}
                    >
                        <option value=""> All</option>
                        {this.sizes.map((size, index) => (
                            <option value={size} key={index}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}
