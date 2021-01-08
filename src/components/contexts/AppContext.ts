import { createContext } from 'react'
import { State } from '../utils'

const AppContext = createContext<State>({state: [], setState: () => {}})
export default AppContext
