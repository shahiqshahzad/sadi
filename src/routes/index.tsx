import { useRoutes } from "react-router-dom";
import LoginRoutes from './LoginRoute'
export default function ThemeRoutes(){
    // const userData: Boolean = true;
    return useRoutes([LoginRoutes])
}