'use client'

import { useParams } from 'next/navigation';
import Flipbook from '../MyBook';
const ItemPage = () => {
    const { id } = useParams();

    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-y-10'>
            <Flipbook />
        </div>
    );
};

export default ItemPage;