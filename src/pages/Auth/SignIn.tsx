import React from 'react'
import NotificationForm from '../../components/form/NotificationForm'
import NavBar from '../../components/Nav/Nav'
import { Container } from 'react-bootstrap';

export default function SignIn() {
    const handleSingInToGoogle = () => {
        console.log("gooing oo")
    }

    return (
        <div>
            <NavBar />
            <Container className="signin-section pt-3">
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-outline-dark " onClick={handleSingInToGoogle}  >
                            <img width="20px" className="image-spacing" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            Login with Google
                        </button>
                    </div>
                </div>      
            </Container>
        </div>
    )
}
