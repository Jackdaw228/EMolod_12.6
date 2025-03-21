
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { newsList} from './fixture/newsMacuv'
import NewsItemComponent from './components/main/news'
function App() {
  return (
    <>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {newsList.map((news) => (
        <NewsItemComponent key={news.id} {...news} />
      ))}
    </>
  )
}

export default App