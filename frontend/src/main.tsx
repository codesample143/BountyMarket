import ReactDOM from "react-dom/client";
import BountyList from "./ProductList";
import './ProductList.css';
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
            <BountyList/>
    );
} else {
    throw new Error('Root element not found');
}