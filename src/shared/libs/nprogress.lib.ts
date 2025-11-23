import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const nprogress = NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
})
