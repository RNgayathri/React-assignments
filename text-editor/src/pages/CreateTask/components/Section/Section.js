import React from 'react';
import styles from './Section.css';
import '../../../../flaticon/font/flaticon.css';
class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state=
            {
                items:this.props.item

            };
        console.log("section" + this.props.task);
    }
    render(){
        return (
            <div className={styles.section}>
                <div className={styles.title}>
                    {this.props.task.title}
                </div>
                <div className={styles.editor}>
                    {this.props.task.desc}
                </div>
            </div>
        );
    }

}
export default Section;