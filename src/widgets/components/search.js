import React from 'react';

const Search = (props) => (
    <form action="" onSubmit={props.handleSubmit}>
        <input
        ref={props.setRef}
        type="text"
        placeholder="Busca tu video favorito"
        className="Search-input"
        name="search"
        onChange={props.handleChange}
        value={props.value}/>
    </form>
)

export default Search