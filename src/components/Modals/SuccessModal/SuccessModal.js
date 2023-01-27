import logoWhite from '../../../assets/logoWhite.webp'
import Modal from '../../shared/Modal/Modal'

import './successModal.css'

const SuccessModal = () => {
  return (
    <Modal type='thankyou'>
      <div className='thankyouModal'>
        <div className='logoWhite'>
          <img src={logoWhite} alt='' className='logoWhiteImg' loading='lazy' />
        </div>

        <h2 className='thankyouModalTitle'>
          You have been Registered Successfuly
        </h2>

        <h2 className='thankyouModalSubtitle'>
          Please Check Your Inbox With verification Email
        </h2>
      </div>
    </Modal>
  )
}

export default SuccessModal
