import { useState } from "react";
import { registerUser } from "../api/userApi.js";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password: ""
    });

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await registerUser(formData);
            setSuccessMessage("Registration successful!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="register">
            <h2>Register</h2>
            {error && (
                <p
                    style={{
                        color: "red",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                >
                    {error}
                </p>
            )}
            {successMessage && (
                <p
                    style={{
                        color: "green",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                >
                    {successMessage}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        required={true}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        minLength="8" required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;