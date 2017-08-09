import React from 'react';
import styles from './Login.css';
import {login} from './Login.actions'
import TextField from '../../component/TextField/TextField'
import Button from '../../component/Button/Button'
import {connect} from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.onChange=this.onChange.bind(this);
        this.onLogin=this.onLogin.bind(this);
    }
    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }
    onLogin(){
        if(!this.state.username || !this.state.password)
        {
            this.props.dispatch(showMessageAlert({
                message: "Enter Username and Email Id!",
                visible: true,
                color: "#e53e3d"
            }));
            return false;
        }
        else if (!(/^[\w]+@([\w]+\.)+[\w-]{2,4}$/.test(this.state.username))) {

           alert('enter valid email id');
        }
        this.props.dispatch(login(this.state.username, this.state.password));
    }
    render(){
        return(
            <div className={styles.loginwrapper}>
                <TextField type="text"
                           className={styles.login}
                           value={this.state.username}
                           label={"Username"}
                           name="username"
                           onChange={(value) => this.onChange('username', value)}/>
                <TextField type="password"
                           className={styles.login}
                           value={this.state.password}
                           label={"Password"}
                           name="password"
                           onChange={(value) => this.onChange('password', value)}/>
                <Button
                    className={styles.LoginButton}
                    text={"LOGIN"}
                    onClick={this.onLogin}
                />
            </div>
        );

    }
}
export const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Login);