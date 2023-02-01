import { HomeRouter, IowaRouter, ArizonaRouter } from '../AppRouter'

export const APPS = [
  {
    subdomain: 'www',
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: 'iowa',
    app: IowaRouter,
    main: false,
  },
  {
    subdomain: 'arizona',
    app: ArizonaRouter,
    main: false,
  },
]
