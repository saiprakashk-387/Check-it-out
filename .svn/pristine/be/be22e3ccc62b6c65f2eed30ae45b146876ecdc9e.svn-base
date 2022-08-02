import React from 'react'
import Box from "@mui/material/Box";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LoginForm:React.FC=()=>{
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const onPasswordChange = (e) => {
        setPassword(e.target.value );
        if(error){
            setError(false);
        }
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        if(error){
            setError(false);
        }
    };

    const validate = (e) => {
        e.preventDefault()
        console.log("email", email)
        console.log("password", password)
        if (email == "hari@gmail.com" && password == "hari") {
            navigate("/Dashboard");
        }
        else{
            setError(true)
        }
    };
    return(
        <Box sx={{ width:"25vw"}} marginTop="3vh">
            <form onSubmit={validate} method="post">
                <Typography  style={{ color: "#5A7184", fontSize: "12px" }} > Email address </Typography>
                <TextField
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    fullWidth
                    size="medium"
                    variant="standard"
                    autoComplete="email"
                    autoFocus
                    required
                    style={{ height: 45 }}
                    sx={{
                    border:"1px solid",
                    borderColor: error?"red":"#C3CAD9",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginBottom: "15px"
                    }}
                    InputProps={{
                    disableUnderline: true,
                    style: {
                        fontSize: 12,
                        padding: '0 18px',
                    }
                    }}
                    error={error}
                    onChange={onEmailChange}
                ></TextField>

                <Typography  style={{ color: "#5A7184", fontSize: "12px" }} marginTop="20px" > Password </Typography>

                <TextField
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                    fullWidth
                    size="medium"
                    variant="standard"
                    required
                    style={{ height: 45 }}
                    sx={{
                        border: "1px solid ",
                        borderColor: error?"red":"#C3CAD9",
                        borderRadius: "6px",
                        marginTop: "10px",
                        marginBottom: "15px"
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                        fontSize: 12,
                        padding: '0 18px'
                        }
                    }}
                    error={error}
                    onChange={onPasswordChange}
                ></TextField>
                
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ height: 45, background: "#E1393F" }}
                    sx={{
                        borderRadius: "6px",
                        borderColor:error?"red":"#C3CAD9",
                        marginTop: "10px",
                        marginBottom: "15px",
                        textTransform:"capitalize",
                        fontSize: "15px",
                        fontWeight:"bold"
                    }}
                    size="medium"
                >
                    Sign in
                    
                </Button>
            </form>
        </Box>
    )
}
export default LoginForm