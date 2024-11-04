'use client'

import { useParams } from 'next/navigation';
const ItemPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Item Details</h1>
            <p>Item ID: {id}</p>
            {/* Add more details or fetch data based on the ID */}
        </div>
    );
};

export default ItemPage;