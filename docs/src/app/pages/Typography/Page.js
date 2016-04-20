import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'
import styles from '../../../www/css/content'

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Typography</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TypographyPage;
