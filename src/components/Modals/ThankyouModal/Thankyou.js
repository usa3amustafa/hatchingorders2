import logoWhite from '../../../assets/logoWhite.png'
import Modal from '../../shared/Modal/Modal'

import './thankyou.css'

const Thankyou = () => {
  return (
    <Modal type='thankyou'>
      <div className='thankyouModal'>
        <div className='logoWhite'>
          <img src={logoWhite} alt='' className='logoWhiteImg' />
        </div>

        <h2 className='thankyouModalTitle'>Thank You For Purchase</h2>

        <h2 className='thankyouModalSubtitle'>Please Check Your Email</h2>

        <p className='thankyouModalDesc'>
          Your login information will be emailed to you
        </p>
      </div>
    </Modal>
  )
}

export default Thankyou
