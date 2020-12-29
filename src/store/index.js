import { createStore } from 'redux';
import reducers from './reducers';
const Store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库
export default Store