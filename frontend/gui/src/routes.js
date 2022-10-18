import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';


const BaseRouter = () => (
    <div>
        <Routes>
            <Route exact path='/' element={<ArticleList />} />
            <Route exact path='/:id' element={<ArticleDetail />} />
        </Routes>
    </div>
)

export default BaseRouter
