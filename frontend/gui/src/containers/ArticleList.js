import React, {useState, useEffect } from 'react';
import Articles from '../components/Article'


const ArticleList = () => {
    let [articles, setArticles] = useState([])
    
    useEffect(() => {
        getArticles()
    }, [])

    let getArticles = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/')
        let data = await response.json()
        setArticles(data)
    }
    
  return (
    <div>
        <Articles data={articles}/>
    </div>
  )
}

export default ArticleList
