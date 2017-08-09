import React from 'react';
import styles from './Emojis.css';
import {connect} from 'react-redux';
import {getEmojis} from './Emojis.actions'
class Emojis extends React.Component {
    constructor(props) {
        super(props);
        this.displayemojis=this.displayemojis.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(getEmojis());
    }
    displayemojis(arr,obj) {
        return arr.map(function (item) {
                return (
                    <tr>
                        <td>{item}</td>
                        <td><img src={obj[item]} alt={item}/></td>
                    </tr>
                );


        })
    }


    render() {
        const {emojis} = this.props;
        const objemojis=emojis.toJS();
        console.log(objemojis);
        const arr=Object.keys(objemojis);
        console.log(arr);
    return (
        <div className={styles.pagewrapper}>
            <table>
                {this.displayemojis(arr,objemojis)}
            </table>
        </div>
    );
  }
}

export const mapStateToProps = (state) =>  {
    return {
        emojis : state.Emojis.get('emojis')
    };
}

export default connect(mapStateToProps) (Emojis);


