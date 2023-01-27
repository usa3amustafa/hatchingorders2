import OurStoryDesc from './OurStoryDesc'
import { ourStoryData } from './aboutData'

const OurStory = () => {
  return (
    <section className='pinkBg'>
      <div className='container ourStory'>
        <div
          className='ourStoryBg'
          style={{ backgroundImage: `url(${ourStoryData.ourStoryBg})` }}
        ></div>

        <div className='ourStoryText'>
          <h2 className='ourStoryTitle'>{ourStoryData.title}</h2>

          {ourStoryData.ourStoryDesc.map(item => {
            return <OurStoryDesc desc={item.desc} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default OurStory
