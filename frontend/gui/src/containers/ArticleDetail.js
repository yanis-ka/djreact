import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd'


const ArticleDetail = () => {
    const articleId = useParams().id
    // const navigate = useNavigate()
    let [article, setArticle] = useState({})
    
    
    useEffect(() => {
        let getArticle = async () => {
            let response = await fetch(`http://127.0.0.1:8000/api/${articleId}`)
            let data = await response.json()
            setArticle(data)
        }
        getArticle()
    }, [articleId])

    
  return (
    <Card title={article.title} >
        <p>{article.content}</p>
    </Card>
  )
}

export default ArticleDetail
