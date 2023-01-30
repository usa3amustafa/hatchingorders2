import logoWhite from '../../../assets/logoWhite.webp'
import Modal from '../../shared/Modal/Modal'

import errorModal from '../../../assets/errorModal.svg'

import './errorModal.css'

const ErrorModal = ({ msg, desc }) => {
  return (
    <Modal type='error'>
      <div className='errorModal'>
        <div className='logoWhite'>
          <img src={logoWhite} alt='' className='logoWhiteImg' loading='lazy' />
        </div>

        <div className='errorImg'>
          <img src={errorModal} alt='' loading='lazy' />
        </div>

        <h2 className='thankyouModalTitle'>{msg}</h2>

        <h2 className='thankyouModalSubtitle'>{desc}</h2>
      </div>
    </Modal>
  )
}

export default ErrorModal
