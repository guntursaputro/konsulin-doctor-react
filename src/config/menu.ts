import images from 'assets/images'

export const TABS_CONSULTING = [
  {
    title: 'Online',
    key: 'online',
    to: '/consulting/online',
  },
  {
    title: 'Terjadwal',
    key: 'terjadwal',
    to: '/consulting/terjadwal',
  },
  {
    title: 'Selesai',
    key: 'selesai',
    to: '/consulting/selesai',
  },
]

export const MENU_PROFILE = [
  {
    label: 'Personal Info',
    icon: images.ic_profile_circle,
    to: '/personal-info',
  },
  {
    label: 'Ulasan & Rating',
    icon: images.ic_thumb,
    to: '/review-rating',
  },
  {
    label: 'Atur Jadwal',
    icon: images.ic_calender,
    to: '/set-schedule',
  },
  {
    label: 'Kebijakan Privasi',
    icon: images.ic_privacy,
    to: '/privacy-policy',
  },
  {
    label: 'FAQ',
    icon: images.ic_faq,
    to: '/faq',
  },
  {
    label: 'Help',
    icon: images.ic_help,
    to: '/help',
  },
]
