import { PageSetting } from './types'

const top: PageSetting = {
  title: 'TOP',
  subTitle: '',
  link: '/',
  icon: 'fas fa-home',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: true,
      href: '/',
    },
  ],
}

const appWatcher: PageSetting = {
  title: 'APP Watcher',
  subTitle: 'お気に入りアプリの今を知る',
  link: '/appWatcher',
  icon: 'far fa-eye',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'APP Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

const modWatcher: PageSetting = {
  title: 'MOD Watcher',
  subTitle: 'お気に入りMODの今を知る',
  link: '/modWatcher',
  icon: 'fas fa-cubes',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'MOD Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

export const pageSettings = {
  top,
  appWatcher,
  modWatcher,
}
