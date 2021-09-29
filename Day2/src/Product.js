import react from 'react';

function Product(){
    const list = ["Laptop","Tablet","PC","Phone","Headphone","Keyboard","Mouse","Speaker","Airpods"];

    return (
        <div>
            <h1>Product list</h1>
            {
                list.map((product) => (
                    <li>{product}</li>
                )
                )
            }
        </div>
    );
}

export default Product;
