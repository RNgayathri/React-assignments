import React from 'react';
import styles from './createTask.css';
import Header from './components/Header/Header.js';
import Aside from './components/Aside/Aside.js';
import Section from './components/Section/Section.js';
class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                items: [],
                task:{
                    id:'',
                    desc:'',
                    title:''
                }
            };
            console.log(this.state.task);
            this.getTaskDetails = this.getTaskDetails.bind(this);
    }
    getTaskDetails(id,desc,title){
        let arr=this.state.task;
        arr.id=id;
        arr.desc=desc;
        arr.title=title;
        this.setState({
            task:arr
        })
    }
  render() {
    return (
        <div className={styles.pagewrapper}>
          <Header/>
          <Aside item={this.state.items} getId={this.getTaskDetails}  />
          <Section item={this.state.items} task={this.state.task}/>
        </div>
    );
  }
}
export default createTask;
