const InstagramImg = ({ bgImg }) => {
  return (
    <div
      className='instagram-img'
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>
  )
}

export default InstagramImg
