import Waiting from "./components/waiting"
import History from "./components/history"
import Draft from "./components/draft"
import Edit from "./components/edit"
import Writer from "./pages/writer"
import Login from "./pages/login"
import Reviewer from "./pages/reviewer"
import Info from "./components/info"
import Toview from "./components/toview"
import Viewed from "./components/viewed"

const routers = [
    {
        path : '/writer',
        name : 'writer',
        component : Writer,
        children : [
            {
                path : 'waiting',
                name : 'waiting',
                component : Waiting
            },
            {
                path : '',
                component : Waiting
            },
            {
                path : 'draft',
                name : 'draft',
                component : Draft
            },
            {
                path : 'edit',
                name : 'edit',
                component : Edit
            },
            {
                path : 'history',
                name : 'history',
                component: History
            },
            {
                path: 'info',
                name: 'info',
                component: Info
            }
        ]
    },
    {
        path : '',
        name : 'login',
        component : Login
    },
    {
        path : '/reviewer',
        name : 'reviewer',
        component : Reviewer,
        children : [
            {
                path: '',
                name: 'toview',
                component: Toview
            },
            {
                path: 'toview',
                name: 'toview',
                component: Toview
            },
            {
                path: 'viewed',
                name: 'viewed',
                component: Viewed
            },
            {
                path: 'info',
                name: 'info',
                component: Info
            }
        ]
    }
]
export default routers
