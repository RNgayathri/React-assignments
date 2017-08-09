import React from 'react'
import './Todolist.css'
import '../Section/Section'
class TodoItems extends React.Component{
    render(){
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map( function (item) {
                return(
                    <li className="list" key={item.key} name={item.text} >
                        <input  className="taskCheckbox" type="checkbox"/>
                        <a>{item.text}</a>
                    </li>
                );
            }
        );

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}
class Todolist extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
                items:this.props.item
            };
    }
    AddTask(){
        let arr=this.state.items;
        arr.push(
            {
                key:Date.now(),
                text:"untitled"
            }
        );
        this.setState({
            items: arr
        });


    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <button onClick={this.AddTask.bind(this)} type="submit">AddTask</button>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}
export default Todolist;
