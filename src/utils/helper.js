import { APPS } from './constants'

export const getApp = () => {
  const subdomain = getSubdomain(window.location.hostname)
  const mainRouter = APPS.find(app => app.main)

  if (!mainRouter) {
    throw new Error('Must have a main router')
  }

  if (subdomain === '') {
    return mainRouter.app
  }

  const app = APPS.find(app => app.subdomain === subdomain)

  if (!app) {
    return mainRouter.app
  } else {
    return app.app
  }
}

export const getSubdomain = location => {
  const locationParts = location.split('.')

  let sliceTill = -2

  // for localhost
  const isLocalhost = locationParts.slice(-1)[0] === 'localhost'

  if (isLocalhost) sliceTill = -1

  return locationParts.slice(0, sliceTill).join('')
}

// iowa.localhost [iowa , localhost]
// iowa.hatchingorders.com [iowa , localhost , com]
