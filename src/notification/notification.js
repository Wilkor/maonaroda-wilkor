import React, {Component}from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Example extends Component {


    constructor(props){

     super(props)


    console.log(this.props.sendNotification)
    }




  createNotification = (type) => {
    return () => {

      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };


  render(props) {
    return (

      <div>
          {this.props.sendNotification ? document.getElementById("success"):'' }

          <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success' id="success"
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>


        <NotificationContainer/>
      </div>
    );
  }
}

export default Example;