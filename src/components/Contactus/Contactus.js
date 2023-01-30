import logo from '../../assets/hatchfulLogo.webp'
import ContactusLeftCol from './ContactusLeftCol'
import RegistrationRightCol from '../Modals/RegistrationModals/RegistrationRightCol'
import Modal from '../shared/Modal/Modal'

const Contactus = () => {
  return (
    <Modal type='registration'>
      <div className='registrationModal'>
        <div className='registrationModalLeftCol'>
          <ContactusLeftCol />
        </div>
        <RegistrationRightCol />
      </div>
    </Modal>
  )
}

export default Contactus
