
import Google from './images/Google.svg';
import Github from './images/github.svg';
import Dribbble from './images/dribbble.svg';
import Arrow from './images/arrow-right.svg';
import './login.scss';

function Login() {
  return (
        <div className="container">
            <div className="body">
                <div>
                    <h3>Login</h3>
                </div>
                <div className="button">
                    <button className="social" id="google"><img src={Google} alt=""/> Google</button>
                    <button className="social" id="github"><img src={Github} alt=""/> Github</button>
                    <button className="social" id="dribbble"><img src={Dribbble} alt=""/> Dribbble</button>
                </div>
                <div className="option">
                    <hr/> 
                    or 
                    <hr/>
                </div>
                <div className="input">
                    <div className="input_title">Email</div>
                    <input className="field" type="text" placeholder="Enter Your mail" />
                </div>
                <div className="input">
                    <div className="input_titleb">Password
                        <span id="forgot">Forgot Password?</span>
                    </div>
                    <input className="field" type="text" placeholder="Enter Your Password" />
                </div>
                <button className="login"><span>Take Me To The Village</span> <img src={Arrow} id="arrow" alt=""/> </button>
                <div className="note">Don't have an account on hustlersVilage? <span id="forgot">Sign up</span> </div>
            </div>

        </div>
  );
}

export default Login;
