import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";
import './App.css'

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ProductList/>
        </React.StrictMode>
    );
} else {
    throw new Error('Root element not found');
}