import React from 'react'
import Breadcrumb from 'components/Breadcrumb'
import ProgressBar from 'components/ProgressBar'
import style from 'css/wrapper'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={style.wrapper}>
          <ProgressBar value={20} denominator={100} />
        </div>
      </div>
    )
  }
}

export default ProgressBarPage;
