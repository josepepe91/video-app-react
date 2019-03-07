import React from 'react'
import Category from './category';
import './categories.css';
import Search
function Categories(props) {
    return (
        <div className="Categories">
        <Search/>
            {
                props.categories.map((item) => {
                    return <Category key={item.id}
                    {...item}
                    handleOpenModal={props.handleOpenModal}></Category>
                })
            }
        </div>
    );
}

export default Categories;
