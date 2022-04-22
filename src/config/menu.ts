import images from 'assets/images'

export const TABS_CONSULTING = [
  {
    title: 'Online',
    key: 'online',
    to: '/consulting/online',
  },
  {
    title: 'Terjadwal',
    key: 'scheduled',
    to: '/consulting/scheduled',
  },
  {
    title: 'Selesai',
    key: 'completed',
    to: '/consulting/completed',
  },
]

export const TABS_SCHEDULE = [
  {
    title: 'Jadwal Online',
    key: 'online-schedule',
    to: '/schedule/online-schedule',
  },
  {
    title: 'Pengaturan',
    key: 'set-schedule',
    to: '/schedule/set-schedule',
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
    to: '/schedule/online-schedule',
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
    label: 'Bantuan',
    icon: images.ic_help,
    to: '/help',
  },
]

export const SESION_MENU = [
  {
    label: 'Chat',
    icon: images.ic_chat_active,
    icon_inactive: images.ic_chat_inactive,
    to: '/consulting-sesion/chat',
    isSelected: true,
  },
  {
    label: 'Summary',
    icon: images.ic_summary_active,
    icon_inactive: images.ic_summary_inactive,
    to: '/consulting-sesion/summary',
    isSelected: false,
  },
  {
    label: 'Rek. Produk',
    icon: images.ic_rekomendasi_active,
    icon_inactive: images.ic_rekomendasi_inactive,
    to: '/consulting-sesion/recomendation',
    isSelected: false,
  },
  {
    label: 'Resep Obat',
    icon: images.ic_resep_active,
    icon_inactive: images.ic_resep_inactive,
    to: '/consulting-sesion/recipe',
    isSelected: false,
  },
]
