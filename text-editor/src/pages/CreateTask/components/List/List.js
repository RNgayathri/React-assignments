import React from 'react';
import './List.css';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                items: this.props.item
            };
    }
     render() {
         const list=this.state.items.map( function (item) {
             if(item.name)
                 return(
                     <li className="list"  name={item.name} >
                         <input  className="taskCheckbox" type="checkbox"/>
                         <a>{item.name}</a>
                     </li>
                 );
             else
                return  alert("noitems");
             }
         );


         return(<ul>
                 {list}
            </ul>

        );
    }
}
export default List;