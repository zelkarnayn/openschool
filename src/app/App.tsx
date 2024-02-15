import Header from "../widgets/header/ui";
import './App.css'
import Footer from "../widgets/footer/ui";
import MainPage from "../pages/mainPage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlesPagination from "../widgets/articles/pagination/ui";

function App() {

  return (
    <>
        <div className='App'>
            <Header/>
            <Routes>
                <Route path={'/blog'} element={<ArticlesPagination/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </div>
    </>
  )
}

export default App
