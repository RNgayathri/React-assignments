import React from 'react'
import styles from './Aside.css';
import '../../../../container/App/App';
import {connect} from 'react-redux';
import PopUp from '../PopUp/PopUp'
import Button from '../../../../component/Button/Button'
import classNames from 'classnames'
import TextField from '../../../../component/TextField/TextField'
class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state=
            {
                items:this.props.item,
                checked:"allChecked",
                value:"",
                showAddTaskPopup: false,
                title:'',
                desc:'',
                id:''
            };
        this.filterTasks = this.filterTasks.bind(this);
        this.setChecked= this.setChecked.bind(this);
        this.addTask= this.addTask.bind(this);
        this.close=this.close.bind(this);
        this.removeItem=this.removeItem.bind(this);
        this.sendId = this.sendId.bind(this);
        this.displayPopup=this.displayPopup.bind(this);
        this.updatestatus=this.updatestatus.bind(this);
    }
    sendId(id,desc,title){
        this.props.getId(id,desc,title);
    }
    displayPopup(title,desc,id){
        this.setState({
            showAddTaskPopup : true,
            title:title,
            desc:desc,
            id:id
        });
    }
    updatestatus(id){
      return this.state.items.map(function (item) {
            if(item.id==id && item.status=="incomplete")
                return (<TextField type="checkbox"
                                   className={styles.TaskStatus}
                                   onClick={()=>{item.status="complete"}}/>);
            else
                if(item.id==id && item.status=="complete")
                    return (<TextField type="checkbox"
                                       checked="checked"
                                       className={styles.TaskStatus}
                                       onClick={()=>{item.status="incomplete"}}/>);

        });

    }
    removeItem(itemId){
        const arr= this.state.items.filter(function (item) {
            return item.id !== itemId

        });
        this.setState({
            items:arr
        });
        this.props.getId();
        console.log(arr);
    }
    setChecked(status){
        this.setState({
            checked: status
        });
    }
    onChange(field, value) {
        this.setState({  [field]: value});
    }
    filterTasks(removeItem,displayPopup,sendId,updatestatus){
        const status = this.state.checked;
        let content = this.state.value.toLowerCase();
        if(content == "")
        {
            if (this.state.checked == "allChecked") {
                return this.state.items.map(function (item) {
                        return (
                            <li className={styles.list} key={item.id} title={item.title}>
                                {updatestatus(item.id)}
                                <a onClick = {()=>{sendId(item.id,item.description,item.title)}} className={styles.listTitle}>{item.title}</a>
                                <a className={classNames(styles.editButton,"flaticon-remove-symbol")} onClick={()=>{removeItem(item.id)}}/>
                                <a className={classNames(styles.editButton,"flaticon-pencil-edit-button")} onClick={()=>{displayPopup(item.title,item.description,item.id)}}/>
                            </li>
                        );
                    }
                );
            }
            else {
                return this.state.items.map(function (item) {
                        if (item.status == status)
                            return (
                                <li className={styles.list} key={item.id}>
                                    <a onClick = {()=>{sendId(item.id,item.description,item.title)}}>{item.title}</a>
                                    <a className={classNames(styles.editButton,"flaticon-remove-symbol")} onClick={()=>{removeItem(item.id)}}/>
                                    <a className={classNames(styles.editButton,"flaticon-pencil-edit-button")}onClick={()=>{displayPopup(item.title,item.description,item.id)}}/>
                                </li>
                            );
                    }
                );
            }
        }
        else{
            return this.state.items.map(function (item) {
                const value=item.title.toLowerCase();
                if(value.includes(content))
                        return (
                            <li className={styles.list} key={item.id}>
                                {updatestatus(item.id)}
                                <a onClick = {()=>{sendId(item.id,item.description,item.title)}} className="listTitle">{item.title}</a>
                                <a className={classNames(styles.editButton,"flaticon-remove-symbol")} onClick={()=>{removeItem(item.id)}}/>
                                <a className={classNames(styles.editButton,"flaticon-pencil-edit-button")}onClick={()=>{displayPopup(item.title,item.description,item.id)}}/>
                            </li>
                        );
                }
            );
        }

    };
    addTask(a,b,c){
        this.setState({
            showAddTaskPopup : false
        });
        if(c){
           this.state.items.map(function (item) {
               if(item.id == c)
               {
                   item.title = a;
                   item.description = b;

               }

           })
        }
        else {
            let arr = this.state.items;
            arr.push(
                {
                    id: Date.now(),
                    title: a,
                    description: b,
                    status:'incomplete'
                }
            );
            this.setState({
                items: arr
            });
        }
    }
    close(){
        this.setState({
            showAddTaskPopup : false
        });
    }
    render() {
        return (
            <div className={styles.Aside}>
                <TextField className={styles.search}
                           searchLabel={styles.searchLabel}
                           name="value"
                           type="search"
                           placeholder="Search Task"
                           value={this.state.value}
                           onChange={(value) => this.onChange('value', value)}/>
                        <span className={classNames("flaticon-musica-searcher",styles.searcher)}/>
                <Button onClick={()=>this.displayPopup()}  className={styles.addtask} text={"addtask"}/>
                <ul className={styles.listWrapper}>
                    {this.filterTasks(this.removeItem,this.displayPopup,this.sendId,this.updatestatus)}
                </ul>
                <div className={styles.checkbox}>
                    <label><input  type="checkbox" checked={this.state.checked == "allChecked"} onChange={()=>this.setChecked("allChecked")} />All</label>
                    <label><input  type="checkbox" checked={this.state.checked  == "complete"}  onChange={()=>this.setChecked("complete")}  />Complete</label>
                    <label><input  type="checkbox" checked={this.state.checked == "incomplete"}  onChange={()=>this.setChecked("incomplete")} />Incomplete</label>
                </div>
                {this.state.showAddTaskPopup  && <PopUp
                    addTask={this.addTask}
                close={this.close}
                    editTitle={this.state.title}
                    editDesc={this.state.desc}
                    editid={this.state.id}
                />}


            </div>
        );
    }
}


export const mapStateToProps= state =>  state;

export default connect(mapStateToProps)(Aside);