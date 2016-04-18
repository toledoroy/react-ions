import React from 'react'
import Breadcrumb from 'components/Breadcrumb'
import First from 'components/First'
import style from 'css/wrapper'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
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
