import React from 'react'
import styles from '../../../www/css/content'

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Color</h3>
            <p>Ambassador uses a specific color palette to communicate meaning, convey visual differentation, and provide a consistent look and feel.</p>
          </div>
          <div className={styles.block}>
            <h3>Neutrals</h3>
            <p>Ambassador uses cool-toned grays injected with a hint of teal to create a lively and modern mood for the interface.</p>
            <p>In general, color is used sparingly to keep the content center stage and not distract end users.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorsPage;
