import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Parts from './Parts';
import Loading from './Shared/Loading';

const Tools = () => {
    const {data: tools, isLoading} = useQuery('product', () =>
  
        fetch('http://localhost:5000/product')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
  
    
    
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-purple-700 text-4xl font-bold uppercase font-bold'>Tools & Parts</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-10'>
                {
                    tools?.map(tool => <Parts
                    key={tool.id} tool={tool}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default Tools;