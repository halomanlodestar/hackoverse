import './App.css'
import { page } from './home'
import './homepage.css'

function App() {

  return (
    <main className='h-full' dangerouslySetInnerHTML={{__html: page}}>
      
    </main>
  )
}

export default App
