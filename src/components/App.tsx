import { Button } from './Button'

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <Button label="Button" icon={{ name: 'AddIcon', side: 'left' }} />
    </div>
  )
}

export default App
