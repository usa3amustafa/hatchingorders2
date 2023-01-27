const MeetPathwaysCard = ({ id, bgImg, desc, changeCurrArr }) => {
  return (
    <div
      className='meet-pathways-card'
      style={{
        background: `linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),url(${bgImg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={() => changeCurrArr(id)}
    >
      <h2 className='meet-pathways-desc'>{desc}</h2>
    </div>
  )
}

export default MeetPathwaysCard
