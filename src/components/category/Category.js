import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, selectCategory } from "../../features/categoriesSlice";
import { selectSearchterm } from "../../features/searchSlice";

import hot from './fire-flame-icon-cdr-173853177.jpg';
import top from './top.jpg;'
import newposts from "./newpost.png";

export const Category = () => { 
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const [location, setlocation] = useState({});
    const searchTerm = useSelector(selectSearchterm);

    const handleClick = (e) => {
        const title = e.target.title;
        dispatch(changeCategory({categoryName: title}));
        const { currentLocation } = location;
    };

    useEffect(() => {
        let element = document.querySelector('category-button');
        if(element) {
            dispatch(changeFilter({categoryName: 'hot'}));
        }
    }, [searchTerm, dispatch]);

    const divCategories = (
        <>
        
        </>
    )

    const searching = ( 
        <div id="searching">
            Search results for <span>'{searchTerm}'</span>
        </div>
    );

    return(
        <section>
            {!searchTerm ? divCategories : searching}
        </section>
    );
};