import { PageSetting, Breadcrumbs } from './types'

const homeBreadcrumbs: Breadcrumbs = {
  text: 'Home',
  disabled: false,
  href: '/',
}

const home: PageSetting = {
  title: homeBreadcrumbs.text,
  subTitle: 'ホーム',
  link: homeBreadcrumbs.href,
  breadcrumbs: [homeBreadcrumbs],
  icon: 'fas fa-home',
}

const appWatcher: PageSetting = {
  title: 'APP Watcher',
  subTitle: 'お気に入りアプリの今',
  link: '/appwatcher',
  breadcrumbs: [
    homeBreadcrumbs,
    {
      text: 'APP Watcher',
      disabled: true,
      href: '/appwatcher',
    },
  ],
  icon: 'far fa-eye',
}

export const pageSettings = {
  home,
  appWatcher,
}
