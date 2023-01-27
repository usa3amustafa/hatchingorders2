import logoWhite from '../../../assets/logoWhite.png'
import Modal from '../../shared/Modal/Modal'

import errorModal from '../../../assets/errorModal.svg'

import './errorModal.css'

const ErrorModal = () => {
  return (
    <Modal type='error'>
      <div className='errorModal'>
        <div className='logoWhite'>
          <img src={logoWhite} alt='' className='logoWhiteImg' />
        </div>

        <div className='errorImg'>
          <img src={errorModal} alt='' />
        </div>

        <h2 className='thankyouModalTitle'>Something Went Wrong!</h2>

        <h2 className='thankyouModalSubtitle'>Please try again later.</h2>
      </div>
    </Modal>
  )
}

export default ErrorModal
