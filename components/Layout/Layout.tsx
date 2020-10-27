import Header from "../../components/Header/Header";
import { AuthProvider } from "../../providers/auth";

const Layout = ({children}) => {
    return (
        <>
            <AuthProvider>
                <Header />      
                {children}
            </AuthProvider>
        </>
    )
    
}

export default Layout;
