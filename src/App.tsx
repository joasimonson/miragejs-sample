import { TaskList } from './components/TaskList'
import { makeServer } from './server'

makeServer()

const App = () => <TaskList />

export default App