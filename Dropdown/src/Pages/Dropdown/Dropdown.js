import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Dropdown.css';
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selecteditem:"Jan",
            displaymenu:false
        };
        this.displaylist = this.displaylist.bind(this);
        this.updateitem=this.updateitem.bind(this);
        this.updatestate=this.updatestate.bind(this);
        this.offClickHandler=this.offClickHandler.bind(this);
    }
    offClickHandler(event) {
        var domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target))
            this.setState({displaymenu: false});
    }

    componentDidMount() {
        document.addEventListener('click', this.offClickHandler, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.offClickHandler, false);
    }

    updatestate(){
        this.setState({
            displaymenu:!this.state.displaymenu
        });
    }
    updateitem(item){
        this.setState({
            selecteditem:item,
            displaymenu:false
        });
        console.log(this.state.displaymenu);
    }
    displaylist(menu,updateitem) {
        return (menu.map(function (item) {
                return <li className={styles.listitems} key={item} onClick={()=>updateitem(item)}>{item}</li>
            })
        );
    }

    render() {
        const menuItems =  ['Jan', 'Feb', 'Mar'];
        return (
            <div className={styles.pagewrapper}>
                <div className={styles.dropdownbox} onClick={()=>{this.updatestate()}}>
                    <span className={styles.arrow}></span>
                    {this.state.selecteditem}
                </div>
                {this.state.displaymenu  &&  <ListItems display={this.displaylist(menuItems,this.updateitem)}/>}
            </div>
        );
    }
}
const ListItems = ({display}) => <ul className={styles.menu}>{display}</ul>;
export default Dropdown;
