import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'
import styles from '../../../www/css/content'

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Layout</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LayoutPage;
