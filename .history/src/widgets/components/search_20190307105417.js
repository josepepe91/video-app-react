import React from 'react';

const Search = (props) => (
    <form action="" onSubmit={props.handleSubmit}>
        <input type="text"
        placeholder="Busca tu video favorito"
        className="Search-input"/>
    </form>
)

export default Search