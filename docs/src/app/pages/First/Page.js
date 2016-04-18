import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'
import style from 'css/content-wrapper'
import First from 'components/First'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        <div className={style.wrapper}>
          <h2>First</h2>
          <p>Info about the component here.</p>
          <First test="okay" />
        </div>
      </div>
    )
  }
}

export default FirstPage;
