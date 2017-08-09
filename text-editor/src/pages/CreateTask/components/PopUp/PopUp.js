import React from 'react'
import styles from './PopUp.css';
import Button from '../../../../component/Button/Button'
import TextField from '../../../../component/TextField/TextField'
import classNames from 'classnames';
class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: (this.props.editTitle || ''),
            description: (this.props.editDesc || '')
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }
    render(){
        const {addTask, close}=this.props;
        return <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.inputWrapper}>
                    <a className={classNames(styles.closePopup,"flaticon-delete")}onClick={()=>close()}></a>
                    <TextField type="text"
                               className={styles.inputTitleBox}
                               label="Title:"
                               name="title"
                               onChange={(value) => this.onChange('title', value)}
                               value={this.state.title}
                               maxlength={10}
                    />
                    <TextField  type="text"
                                name="description"
                                label="Description:"
                                onChange={(value) => this.onChange('description', value)}
                                value={this.state.description}/>
                </div>
                <Button className={styles.popup_button}  onClick={() => addTask(this.state.title,this.state.description,this.props.editid)} text={"save"}/>
            </div>
        </div>;
    }
}
export default PopUp;
