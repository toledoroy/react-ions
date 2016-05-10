import React from 'react'
import {TabWrapper, Tab} from 'react-conventions/lib/TabWrapper'
import ProgressBar from 'react-conventions/lib/ProgressBar'
import style from './style.scss'

const ExampleTabWrapperDefault = () => (
  <TabWrapper>
    <Tab title="All Recent Activity" count={1723} optTabContentClass={style['tab-content']}>
      <p>This tab contains another component.</p>
      <ProgressBar label='Progress' showPercentage={true} value={40} denominator={50} className="success" />
    </Tab>
    <Tab title="Custom Bookmark" count={50} optTabContentClass={style['tab-content']}>
      <p>Pinterest chia whatever next level, viral franzen pitchfork typewriter seitan migas williamsburg austin before they sold out man bun taxidermy. Tilde keffiyeh pickled knausgaard, lo-fi shabby chic gentrify man braid portland XOXO cred fap swag leggings. Ethical chia pickled lumbersexual 3 wolf moon, etsy meggings austin venmo pork belly hammock vice. Selvage beard kitsch irony, hella scenester ugh chillwave marfa truffaut venmo jean shorts biodiesel. Banh mi mumblecore letterpress actually skateboard organic. Listicle sriracha deep v retro. Tattooed aesthetic bicycle rights, vegan readymade venmo normcore migas 3 wolf moon farm-to-table shoreditch letterpress kickstarter.</p>
    </Tab>
    <Tab title="Hello World" optTabContentClass={style['tab-content']}>
      <p>Organic craft beer skateboard offal asymmetrical everyday carry umami, paleo scenester forage austin. Banh mi paleo microdosing semiotics, distillery yr meditation squid knausgaard taxidermy organic chia synth fingerstache. Banh mi synth brunch franzen tilde gastropub. Jean shorts tacos literally keytar letterpress, knausgaard neutra kitsch tumblr. Celiac waistcoat next level, chambray trust fund etsy mumblecore sriracha. Migas food truck cliche four dollar toast squid fanny pack fixie blue bottle DIY. Kombucha humblebrag cliche austin occupy pickled williamsburg cardigan, pabst godard hashtag wayfarers.</p>
    </Tab>
  </TabWrapper>
)

export default ExampleTabWrapperDefault
