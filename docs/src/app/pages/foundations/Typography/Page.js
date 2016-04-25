import React from 'react'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'
import styles from 'private/css/content'

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Typography</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
            <h1>This is an H1 tag</h1>
            <h2>This is an H2 tag</h2>
            <h3>This is an H3 tag</h3>
            <h4>This is an H4 tag</h4>
            <h5>This is an H5 tag</h5>
            <h6>This is an H6 tag</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default TypographyPage;
