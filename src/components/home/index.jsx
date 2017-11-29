import React, { Component, PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';
/* Component */
import Header from '../header/';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        <section className={HomeStyle.about}>
          <div className={HomeStyle.about_item}>
            <h3>About me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet dapibus consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nisi, convallis eu sapien a, maximus rhoncus arcu. Integer sapien erat, molestie vel massa a, auctor tincidunt urna. Curabitur porta enim vitae magna dignissim, sed auctor nunc molestie. Etiam nec orci sed massa aliquet dignissim vel non leo. Donec sed odio quis turpis auctor porttitor vel at felis. Vestibulum vitae semper dolor, euismod mollis nisi.
            Quisque convallis nec magna at ornare. In efficitur justo eu dignissim eleifend. Vivamus nec efficitur nisi. Nullam vel elit dictum, bibendum arcu vitae, lobortis metus. Donec et est urna. Pellentesque mattis sed libero sed imperdiet. Cras ornare volutpat accumsan.</p>
          </div>
        </section>
      </div>
    )
  }
}


export default Home
