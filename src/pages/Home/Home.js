import React, {Fragment} from "react"
import {Link,Route,Routes} from "react-router-dom"
import './Home.scss'
import Page from "../Page/Page"
import Main from "../Main/Main";
function Home() {
    return(
        <Fragment>{
            <div className={'header'}>
                <div className={'header__menu'}>
                    <Link to={'/main'}> Головна </Link>
                    <Link to={'/page'}> Сторінка </Link>
                </div>
            </div>
        }
            <div className={'content'}>
                <Routes>
                    <Route path={'/main'} element={<Main/>}/>
                    <Route path={'/page'} element={<Page/>}/>
                </Routes>
            </div>
        </Fragment>
    )

}

export default Home;