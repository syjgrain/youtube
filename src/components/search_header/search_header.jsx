import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(
    ({onSearch}) => {
        const inputRef = useRef();
        const handleSearch = () =>{
            const value = inputRef.current.value;
            onSearch(value);
        }
        const onClick =()=>{
            handleSearch();
        };
        const onKeyPress = event =>{
            if(event.key === 'Enter'){
                handleSearch();
            }
        };
    
    
    
        return(
            <header className={styles.header}>
                <img className={styles.logo} src="/images/logo.png" alt="logo"/>
                <input
                ref={inputRef}
                className={styles.input} type="search" placeholder="search.." onKeyPress={onKeyPress} />
                <button className={styles.search} type="submit">
                    <img className={styles.searchImg} src="/images/search.png" alt="search" onClick={onClick}/>
                </button>
            </header>
        )
    }
);

export default SearchHeader;