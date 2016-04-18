import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'
import style from 'css/content-wrapper'
import ProgressBar from 'components/ProgressBar'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        <div className={style.wrapper}>
          <ProgressBar value={20} denominator={100} />
        </div>
      </div>
    )
  }
}

export default ProgressBarPage;
