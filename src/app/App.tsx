import Header from "../widgets/header/ui";
import './App.css'
import Footer from "../widgets/footer/ui";
import MainPage from "../pages/mainPage.tsx";

function App() {

  return (
    <>
        <div className='App'>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    </>
  )
}

export default App
