import { products } from "@/utils/Products";
import Heading from "../general/Heading";
import ProductCard from "./productCard";

const Products = () => {
    return (
        <div>
            <Heading text="All Products" />
            <div>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;