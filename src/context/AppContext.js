import { createContext, useState, useEffect } from 'react'
import { coursesData, getCourseData } from '../coursesData'
import { useNavigate } from 'react-router-dom'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showThankyou, setShowThankyou] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [openNavtop, setOpenNavtop] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [cartProducts, setcartProducts] = useState([]) // cart state

  const [showSignup, setShowSignup] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showForgotPass, setShowForgotPass] = useState(false)

  const [contactusModal, setContactusModal] = useState(false)
  const [videoModal, setVideoModel] = useState(false)
  const [pathwaysModal, setPathwaysModal] = useState(false)

  // signup error handling
  const [registered, setRegistered] = useState(false)
  const [internalServerError, setInternalServerError] = useState(false)

  // user logged in state
  const [loggedIn, setLoggedIn] = useState(false)

  // login error handling
  const [loggedInModal, setLoggedInModal] = useState(false)
  const [verifyEmail, setVerifyEmail] = useState(false)
  const [notfound, setNotfound] = useState(false)
  const [dataIncorrect, setDataIncorrect] = useState(false)

  // forgot password
  const [emailSent, setEmailSent] = useState(false)
  const [emailNotFound, setEmailNotFound] = useState(false)

  // reset password changed
  const [passwordChanged, setPasswordChanged] = useState(false)
  const [passNotMatch, setPassNotMatch] = useState(false)
  const [tokenNotAuthenticated, setTokenNotAuthenticated] = useState(false)
  const [failedPassUpdate, setFailedPassUpdate] = useState(false)
  const [tokenExpired, setTokenExpired] = useState(false)

  // logout modal
  const [logoutModal, setLogoutModal] = useState(false)
  const [loggedOut, setLoggedOut] = useState(false)
  const [logoutPrb, setLogoutPrb] = useState(false)

  // getting started
  const [emailSentVer, setEmailSentVer] = useState(false)

  // invoive me

  // stripe

  // courses
  const datadatadata = coursesData.find(course => {
    return course.id === 1
  })

  const timeManagement = coursesData.find(course => {
    return course.id === 2
  })

  const actionplans = coursesData.find(course => {
    return course.id === 3
  })

  const postsecondaryreadiness = coursesData.find(course => {
    return course.id === 4
  })

  const programdevelopment = coursesData.find(course => {
    return course.id === 5
  })

  const purposefulprograms = coursesData.find(course => {
    return course.id === 6
  })

  const internationalschoolc = coursesData.find(course => {
    return course.id === 7
  })

  const reportingresults = coursesData.find(course => {
    return course.id === 8
  })

  const sysofchange = coursesData.find(course => {
    return course.id === 9
  })

  const miracleschallanges = coursesData.find(course => {
    return course.id === 10
  })

  // redirect to home

  // close nav top
  const closeNavtop = () => {
    setOpenNavtop(false)
  }

  //close modal
  const closeModal = () => {
    setShowCartModal(false)
    setShowThankyou(false)
    setShowRegistration(false)
    setShowLogin(false)
    setShowForgotPass(false)
    setRegistered(false)
    setInternalServerError(false)
    setVideoModel(false)
    setPathwaysModal(false)
    setContactusModal(false)
    setLoggedInModal(false)
    setLogoutModal(false)
    setVerifyEmail(false)
    setNotfound(false)
    setDataIncorrect(false)
    setEmailSent(false)
    setEmailSentVer(false)
    setEmailNotFound(false)
    setPasswordChanged(false)
    setPassNotMatch(false)
    setTokenNotAuthenticated(false)
    setFailedPassUpdate(false)
    setLoggedOut(false)
    setLogoutPrb(false)
    setTokenExpired(false)

    // true because it doesnot trigger the modal to open it only activates the signup modal in the left col if the registration modal
    setShowSignup(true)
  }

  //open cart modal
  const openCartModal = () => {
    setShowCartModal(true)
  }

  //open registration modal
  const openRegistrationModal = () => {
    setShowRegistration(true)
  }

  // open thank you modal
  const openThankyouModal = () => {
    setShowThankyou(true)
  }

  // open error modal
  const openContactusModal = () => {
    setContactusModal(true)
  }

  //open data video modal
  const openDataVidModal = () => {
    setVideoModel(true)
  }

  //open pathways  modal
  const openPathwaysModal = () => {
    setPathwaysModal(true)
  }

  // open email verification modal
  const openVerificationModal = () => {
    closeModal()
    setVerifyEmail(true)
  }

  // open logged in modal
  const openLoggedInModal = () => {
    closeModal()
    setLoggedInModal(true)
  }

  // open not found in modal
  const openNotFound = () => {
    closeModal()
    setNotfound(true)
  }

  // open data incorrect in modal
  const openDataIncorrect = () => {
    closeModal()
    setDataIncorrect(true)
  }

  //open registration modal
  const openLogoutModal = () => {
    setLogoutModal(true)
  }

  // for navbar style change on scroll
  function makeSticky() {
    if (window.scrollY >= 10) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  // cart logic

  // get product quantity
  const getProductQuantity = id => {
    const quantity = cartProducts.find(item => item.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  }

  // add one to cart
  const addOneToCart = id => {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
      // product is not in cart
      setcartProducts([
        ...cartProducts,
        {
          id,
          quantity: 1,
        },
      ])
    } else {
      // product is in cart
      setcartProducts(
        cartProducts.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    }
  }

  // add amount to cart
  const addAmountToCart = (id, amount) => {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
      // product is not in cart
      setcartProducts([
        ...cartProducts,
        {
          id,
          quantity: amount,
        },
      ])
    } else {
      // product is in cart
      setcartProducts(
        cartProducts.map(item =>
          item.id === id ? { ...item, quantity: amount } : item
        )
      )
    }
  }

  // remove one to cart
  const removeOneFromCart = id => {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      // product is in cart
      setcartProducts(
        cartProducts.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    }
  }

  // delete from cart
  const deleteFromCart = id => {
    setcartProducts(prev =>
      prev.filter(item => {
        return item.id !== id
      })
    )
  }

  // get total cost
  const getTotalCost = () => {
    let totalCost = 0
    cartProducts.map(item => {
      const courseData = getCourseData(item.id)
      console.log(courseData)
      totalCost += courseData.price * item.quantity
    })
    return totalCost
  }

  // addOneToCartOpenCart

  const addAmountToCartOpenCart = (id, amount) => {
    addAmountToCart(id, amount)
    openCartModal()
  }

  // registration modals
  // open login modal
  const openLoginModal = () => {
    setShowForgotPass(false)
    setShowSignup(false)
    setShowLogin(true)
  }

  // open forgot password modal
  const openForgotPassModal = () => {
    setShowLogin(false)
    setShowSignup(false)
    setShowForgotPass(true)
  }

  // open signup modal
  const openSignupModal = () => {
    setShowLogin(false)
    setShowForgotPass(false)
    setShowSignup(true)
  }

  // qunatity controls

  // use effects

  useEffect(() => {
    window.addEventListener('scroll', makeSticky)
  })

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('stopScrolling')
    } else {
      document.body.classList.remove('stopScrolling')
    }
  }, [showModal])

  return (
    <AppContext.Provider
      value={{
        openNavtop,
        closeNavtop,
        sticky,
        showModal,
        closeModal,
        datadatadata,
        timeManagement,
        actionplans,
        cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        addAmountToCart,
        addAmountToCartOpenCart,
        showThankyou,
        showCartModal,
        openCartModal,
        openThankyouModal,
        showRegistration,
        openRegistrationModal,
        showLogin,
        showForgotPass,
        showSignup,
        openLoginModal,
        openSignupModal,
        openForgotPassModal,
        registered,
        setRegistered,
        postsecondaryreadiness,
        programdevelopment,
        purposefulprograms,
        videoModal,
        openDataVidModal,
        pathwaysModal,
        openPathwaysModal,
        internationalschoolc,
        reportingresults,
        sysofchange,
        miracleschallanges,
        contactusModal,
        openContactusModal,
        internalServerError,
        setInternalServerError,
        loggedInModal,
        verifyEmail,
        notfound,
        dataIncorrect,
        openLoggedInModal,
        openVerificationModal,
        openNotFound,
        openDataIncorrect,
        loggedIn,
        setLoggedIn,
        emailSent,
        setEmailSent,
        emailSentVer,
        setEmailSentVer,
        emailNotFound,
        setEmailNotFound,
        passwordChanged,
        setPasswordChanged,
        passNotMatch,
        setPassNotMatch,
        tokenNotAuthenticated,
        setTokenNotAuthenticated,
        failedPassUpdate,
        setFailedPassUpdate,
        getCourseData,
        logoutModal,
        openLogoutModal,
        loggedOut,
        setLoggedOut,
        logoutPrb,
        setLogoutPrb,
        tokenExpired,
        setTokenExpired,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
