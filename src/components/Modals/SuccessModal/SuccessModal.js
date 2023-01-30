import logoWhite from '../../../assets/logoWhite.webp'
import Modal from '../../shared/Modal/Modal'

import './successModal.css'

const SuccessModal = ({ msg, desc }) => {
  return (
    <Modal type='thankyou'>
      <div className='thankyouModal'>
        <div className='logoWhite'>
          <img src={logoWhite} alt='' className='logoWhiteImg' loading='lazy' />
        </div>

        <h2 className='thankyouModalTitle'>{msg}</h2>

        <h2 className='thankyouModalSubtitle'>{desc}</h2>
      </div>
    </Modal>
  )
}

export default SuccessModal
