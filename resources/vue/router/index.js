import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../layouts/Dashboard.vue'
import MyAccount from '../layouts/MyAccount.vue'
import SignOut from '../layouts/SignOut.vue'
import Privacy from '../layouts/Privacy.vue'
import Terms from '../layouts/Terms.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* Sailing Log */
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      render: () => Dashboard,
    },
    /* Account Info */
    {
      path: '/account',
      name: 'Account',
      component: MyAccount,
      render: () => MyAccount,
    },
    {
      path: '/sign-out',
      name: 'SignOut',
      component: SignOut,
      render: () => SignOut,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
      render: () => Privacy,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
      render: () => Terms,
    },
  ],
})

export default router
