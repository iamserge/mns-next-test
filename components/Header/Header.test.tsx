import renderer from "react-test-renderer";
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import { AuthContext, defaultUser } from "../../providers/auth";
import Header from "./Header";

describe("Header", () => {
    afterEach(cleanup);
    it("renders correctly", () => {
        const component = renderer.create(<Header />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders logged in user details correctly', () => {
        const newUser = defaultUser;
        newUser.id = 4;
        const context = {
            user: newUser,
            isLoggedIn: true,
            incorrectUser: false,
            cachedUserId: "",
            logIn: async (_id:string) => {},
            logOut: async () => {},
        }
        const { getByText } = render(
            <AuthContext.Provider value={context}>
                <Header />
            </AuthContext.Provider>
            ,
        );
        expect(getByText(/hello user 4/i)).toBeTruthy();
    });
    it('renders logged in user details correctly', () => {
        const newUser = defaultUser;
        newUser.id = 4;
        const context = {
            user: newUser,
            isLoggedIn: true,
            incorrectUser: false,
            cachedUserId: "",
            logIn: async (_id:string) => {},
            logOut: async () => {},
        }
        const {getByText, getByLabelText} = render(
            <AuthContext.Provider value={context}>
                <Header />
            </AuthContext.Provider>
        );
        expect(getByText(/hello user 4/i)).toBeTruthy();

        
    });
    it('renders log out flow correctly', () => {
        const newUser = defaultUser;
        newUser.id = 4;
        const context = {
            user: newUser,
            isLoggedIn: true,
            incorrectUser: false,
            cachedUserId: "",
            logIn: async (_id:string) => {},
            logOut: async () => {},
        }
        const { getByText, getByPlaceholderText } = render(
            <AuthContext.Provider value={context}>
                <Header />
            </AuthContext.Provider>
        );
        expect(getByText(/hello user 4/i)).toBeTruthy();
        fireEvent.click(getByText(/log out/i));
        waitFor(()=>{
            expect(getByPlaceholderText(/user id/i)).toBeTruthy();
        })
        
    });
    it('renders invalid user correctly', () => {
        const newUser = defaultUser;
        newUser.id = 4;
        const context = {
            user: newUser,
            isLoggedIn: true,
            incorrectUser: true,
            cachedUserId: "",
            logIn: async (_id:string) => {},
            logOut: async () => {},
        }
        const { getByText, getByPlaceholderText } = render(
            <AuthContext.Provider value={context}>
                <Header />
            </AuthContext.Provider>
        );
        expect(getByText(/incorrect user id/i)).toBeTruthy();
        
    });
});

