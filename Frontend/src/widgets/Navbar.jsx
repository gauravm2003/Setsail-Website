import { Link, NavLink } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import Logo from '../assets/Setsail.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    const [openDialog, SetOpenDialog] = useState(false);

    const [isClosing, setIsClosing] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const login = useGoogleLogin({
        onSuccess: (codeResp) => {
            GetUserProfile(codeResp);
        },
        onError: (error) => console.log(error)
    })

    const GetUserProfile = (tokenInfo) => {
        // console.log("Access Token:", tokenInfo?.access_token);

        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenInfo?.access_token}`,
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(resp => {
                // console.log('User Profile:', resp);
                localStorage.setItem('user', JSON.stringify(resp))
                SetOpenDialog(false);
                window.location.reload();
            });
    };

    const userSignUp = () => {

        const user = localStorage.getItem('user');

        if (!user) {
            SetOpenDialog(true)
            return;
        }

    }

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            SetOpenDialog(false);
        });
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">

                    {/* Logo Image.. */}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-image" src={Logo} alt="SentSail" height="45px" />
                    </a>

                    <div className="d-flex align-items-center">

                        {/* Collapsible Toggler Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Profile Button (Visible on mobile only) */}
                        <div className="mobile-profile-icon ms-2">
                            {user ?
                                <div>
                                    <Popover.Root>
                                        <Popover.Trigger asChild>
                                            <img
                                                src={user?.picture}
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                    border: "2px solid rgba(89, 89, 89, 1)",
                                                    cursor: "pointer",
                                                }}
                                                alt="User"
                                            />
                                        </Popover.Trigger>

                                        <Popover.Portal>
                                            <Popover.Content
                                                className="bg-white p-1 rounded shadow-sm"
                                                sideOffset={8}
                                            >
                                                <div className="d-flex flex-column">

                                                    <Link
                                                        to="/my-trips"
                                                        className="popover-item text-decoration-none text-dark"
                                                    >
                                                        My Trips
                                                    </Link>

                                                    <div className="popover-item"
                                                        style={{
                                                            'color': 'red'
                                                        }}
                                                        onClick={() => {
                                                            googleLogout();
                                                            localStorage.clear();
                                                            window.location.href = '/';
                                                        }}
                                                    >
                                                        Logout
                                                    </div>
                                                </div>
                                            </Popover.Content>
                                        </Popover.Portal>
                                    </Popover.Root>
                                </div>
                                :
                                <button className='profile' style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={userSignUp}>

                                    <i className="bi bi-person-circle"></i>

                                </button>
                            }
                        </div>
                    </div>
                </div>

                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {[
                            { name: 'Home', path: '/' },
                            // { name: 'About Us', path: '/about' },
                            { name: 'Destination', path: '/destination' },
                            // { name: 'Tours', path: '/tours' },
                            // { name: 'Elements', path: '/elements' },
                            { name: 'AI Trip Planner', path: '/ai-trip-planner' }
                        ].map((item, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    className="nav-link"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#3fd0d4' } : {}
                                    }
                                    to={item.path}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Search Bar And Search Button */}
                <div
                    className="search-icon container-fluid"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}
                >
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Search..." />
                        <button className="search-button">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>

                    <div>
                        {user ?
                            <div>
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <img
                                            src={user?.picture}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                border: "2px solid rgba(89, 89, 89, 1)",
                                                cursor: "pointer",
                                            }}
                                            alt="User"
                                        />
                                    </Popover.Trigger>

                                    <Popover.Portal>
                                        <Popover.Content
                                            className="bg-white p-1 rounded shadow-sm"
                                            sideOffset={8}
                                        >
                                            <div className="d-flex flex-column">

                                                <Link
                                                    to="/my-trips"
                                                    className="popover-item text-decoration-none text-dark"
                                                >
                                                    My Trips
                                                </Link>

                                                <div className="popover-item"
                                                    style={{
                                                        'color': 'red'
                                                    }}
                                                    onClick={() => {
                                                        googleLogout();
                                                        localStorage.clear();
                                                        window.location.href = '/';
                                                    }}
                                                >
                                                    Logout
                                                </div>
                                            </div>
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                            </div>
                            :
                            <button className='profile' style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={userSignUp}>

                                <i className="bi bi-person-circle"></i>

                            </button>
                        }
                    </div>

                    <Dialog.Root open={openDialog} onOpenChange={SetOpenDialog}>

                        <Dialog.Portal>

                            <Dialog.Overlay className={`dialog-overlay ${isClosing ? 'closing' : ''}`} />

                            <Dialog.Content className={`dialog-content ${isClosing ? 'closing' : ''}`}>

                                <div className="travel-dialog">
                                    <div className="dialog-header">

                                        <Dialog.Title asChild>
                                            <h2>Sign-In</h2>
                                        </Dialog.Title>

                                    </div>
                                    <div className="dialog-body">

                                        <div className="text-center">

                                            <i className="fas fa-plane travel-icon"></i>

                                            <Dialog.Description asChild>
                                                <p className="dialog-description">
                                                    Continue with your Google account
                                                </p>
                                            </Dialog.Description>

                                        </div>

                                        <button className="btn-google mb-3" onClick={login}>
                                            <FontAwesomeIcon icon={faGoogle} /> Sign In to Google Account
                                        </button>

                                        <div className="footer-links">
                                            <a href="#">Privacy Policy</a>
                                            <a href="#">Terms of Service</a>
                                        </div>
                                    </div>

                                    <Dialog.Close asChild>

                                        <button
                                            className="dialog-close-button"
                                            aria-label="Close"
                                            onClick={handleClose}
                                        >
                                            <Cross2Icon />
                                        </button>

                                    </Dialog.Close>

                                </div>

                            </Dialog.Content>

                        </Dialog.Portal>

                    </Dialog.Root>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
