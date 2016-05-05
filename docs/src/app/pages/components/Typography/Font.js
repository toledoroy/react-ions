import React from 'react'
import styles from './styles.scss'

const Font = (props) => {
  return (
    <div className={styles['font-box']}>
      <div className={styles['font-box-aa']} style={ {fontFamily: props.fontFamily, fontWeight: props.fontWeight, fontStyle: props.fontStyle} }>
        Aa
      </div>
      <div className={styles['font-box-weight']}>
        <span>{ props.weight }</span>
      </div>
    </div>
  )
}

Font.propTypes = {
  fontFamily: React.PropTypes.string.isRequired,
  fontWeight: React.PropTypes.string.isRequired,
  fontStyle: React.PropTypes.string.isRequired,
  weight: React.PropTypes.string.isRequired
}

export default Font
