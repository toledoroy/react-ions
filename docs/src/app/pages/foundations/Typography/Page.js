import React from 'react'
import Font from '../../components/Typography/Font'
import list from './FontList'
import styles from 'private/css/content'
import localStyles from './styles.scss'

const TypographyPage = (props) => {

  let proximaNovaList = list.proximaNova.map((font, index) =>
    <div key={index} className={localStyles['font-wrapper']}>
      <Font fontFamily={font.fontFamily} fontWeight={font.fontWeight} fontStyle={font.fontStyle} weight={font.weight} />
    </div>
  );

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.block}>
          <h3>Typography</h3>
          <p>At the heart of good typography is a good typeface. At Ambassador we use Proxima Nova for it’s small stroke contrast, large x-height, and simple clear letterforms. It also has many weights, allowing for flexibility of heirarchy, size, and color options.</p>
        </div>
        <div className={styles.block}>
          <h3>Proxima Nova</h3>
          <div className={localStyles['font-list']}>
            {proximaNovaList}
          </div>
        </div>
        <div className={styles.block}>
          <h3>Type Sizes</h3>
          <div>
            <h1>The quick brown fox jumps over the lazy dog.</h1>
            <h5 className={localStyles['typography-type']}>Heading Large</h5>

            <h2>The quick brown fox jumps over the lazy dog.</h2>
            <h5 className={localStyles['typography-type']}>Heading Medium</h5>

            <h3>The quick brown fox jumps over the lazy dog.</h3>
            <h5 className={localStyles['typography-type']}>Heading Label</h5>

            <h4>The quick brown fox jumps over the lazy dog.</h4>
            <h5 className={localStyles['typography-type']}>Heading Small</h5>

            <p>The quick brown fox jumps over the lazy dog.</p>
            <h5 className={localStyles['typography-type']}>Body Default</h5>

            <small>The quick brown fox jumps over the lazy dog.</small>
            <h5 className={localStyles['typography-type']}>Body Small</h5>

            <h5>The quick brown fox jumps over the lazy dog.</h5>
            <h5 className={localStyles['typography-type']}>Pre Heading</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypographyPage;
