import Waiting from "./components/waiting"
import History from "./components/history"
import Draft from "./components/draft"
import Edit from "./components/edit"

const routers = [
    {
        path : '/waiting',
        name : 'waiting',
        component : Waiting
    },
    {
        path : '/',
        component : Waiting
    },
    {
        path : '/draft',
        name : 'draft',
        component : Draft
    },
    {
        path : '/edit',
        name : 'edit',
        component : Edit
    },
    {
        path : '/history',
        name : 'history',
        component: History
    }
]
export default routers
