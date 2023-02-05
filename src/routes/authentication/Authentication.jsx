//*REACT 


//*COMPONENTS
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

//*STYLING
import './authentication.styles.scss'

const Authenticate = () => {
  

  return (
    <div className="authentication-container"> 
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authenticate;
