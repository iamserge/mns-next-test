import { useState } from "react";
import { useAuth } from "../../providers/auth";
import Link from 'next/link';


const Header = () => {
    
    const { isLoggedIn, cachedUserId, user, logIn, logOut, incorrectUser } = useAuth();
    const [userId, setuserId] = useState(cachedUserId || "");
    return (
        <div className="absolute w-full bg-white left-0 top-0 shadow">
            <div className="flex justify-between py-6 px-6">
                <Link href="/">
                    <h1 className="text-2xl cursor-pointer">M&amp;S TEST SHOP</h1>
                </Link>
                <div>
                    {isLoggedIn && !incorrectUser ? (
                        <div>
                            <span>Hello user {user.id}</span>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 text-black text-base p-2 ml-5 px-4 rounded"
                                onClick={() => logOut()}
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div>
                            {incorrectUser && (
                                <span className="text-red-500 mr-5">
                                    Incorrect user id
                                </span>
                            )}
                            <input
                                className="p-2 rounded border-2"
                                type="text"
                                value={userId}
                                onChange={(e) => {
                                    setuserId(e.target.value);
                                }}
                                onKeyDown={(e)=>{
                                    if (e.key === 'Enter') {
                                        logIn(userId);
                                    }
                                }}
                                placeholder="User id"
                            />
                            <button
                                className={`hover:bg-gray-400 text-black text-base ml-5 p-2 px-4 rounded ${
                                    userId.length === 0
                                        ? "pointer-events-none bg-gray-200"
                                        : "bg-gray-300"
                                } `}
                                onClick={() => {
                                    logIn(userId);
                                }}
                            >
                                Log in
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
