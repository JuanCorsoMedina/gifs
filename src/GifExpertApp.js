import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gif']);

    //const handleAdd = ()=>{
    //    setCategories([...categories,"looking martin" ]);  
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((data) => (
                        <GifGrid
                            key={data}
                            category={data}
                        />
                    ))
                }
            </ol>
        </>
    )
}
