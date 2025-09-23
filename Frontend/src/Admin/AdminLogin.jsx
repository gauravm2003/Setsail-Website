import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(true);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            onLogin();
            setOpen(false);
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <Popover.Root open={open} onOpenChange={setOpen} modal={true}>
            <Popover.Trigger asChild>
                <div
                    style={{
                        position: "fixed",
                        top: "30%",
                        left: "50%",
                        width: "1px",
                        height: "1px",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                    }}
                />
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    onInteractOutside={(e) => e.preventDefault()}
                    onEscapeKeyDown={(e) => e.preventDefault()}
                    sideOffset={5}
                    className="bg-white p-3 rounded shadow border"
                    style={{
                        width: 280,
                        zIndex: 999,
                        position: "fixed",
                        top: "30%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <h5 className="mb-3 text-center">Admin Login</h5>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control mb-2"
                            autoFocus
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control mb-2"
                        />
                        {error && <div className="text-danger mb-2">{error}</div>}
                        <button type="submit" className="btn btn-dark w-100">
                            Login
                        </button>
                    </form>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}

export default AdminLogin;
