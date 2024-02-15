import { lazy } from 'react';
import MinimalLayout from '../layout/MinimalLayout/index';
import Loadable from '../utils/loadable/Loadable';
const AuthLogin = Loadable(lazy(() => import('../pages/auth/login')))
const LoginRoutes = {
    path:'/',
    element:(
        <MinimalLayout/>
    ),
    children:[
        {
            path:'/login',
            element:<AuthLogin/>
        }
    ]
}

export default LoginRoutes;