export const CONSULTATION_LIST = [
  {
    name: 'Guntur Saputro',
    date: '14 Januari 2022',
    hour: '09:30',
    status: 'Terjadwal',
    startTime: '2 Hari 8 Jam',
  },
  {
    image: 'https://placekitten.com/400',
    name: 'Toto Prasetyo',
    date: '4 Maret 2022',
    hour: '20:30',
    status: 'Selesai',
  },
  {
    image: 'https://placekitten.com/500',
    name: 'Nalendro Agung',
    date: '2 Maret 2022',
    hour: '17:30',
    status: 'Online',
  },
  {
    image: 'https://placekitten.com/520',
    name: 'Diego Costa',
    date: '28 Maret 2022',
    hour: '17:30',
    status: 'Terjadwal',
    startTime: '1 hari 1 jam',
  },
]

export const PRODUCT_LIST = [
  {
    image: 'https://placekitten.com/700',
    title: 'Bening Facial Wash',
    rate: 5,
    price: 500000,
    store: 'Bening official store',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, soluta!',
    amount: 1,
    note: 'Pakai 2x sehari, pagi dan sebelum tidur sesudah cuci muka',
  },
  {
    image: 'https://placekitten.com/800',
    title: 'Viva Facial Wash',
    rate: 4,
    price: 450000,
    store: 'Ayu Shop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, soluta, Lorem ipsum dolor sit amet consectetur adipisicing elit!',
    amount: 2,
    note: '',
  },
]

export const SCHEDULE_LIST = [
  {
    status: true,
    date: 'Senin, 9 Mei 2022',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
  {
    status: false,
    date: 'Rabu, 21 Januari 2022',
    hour: [
      '10:00 - 11.30',
      '12.00 - 14.00',
      '14.30 - 15.30',
      '17.30 - 18.30',
      '18.30 - 19.30',
    ],
  },
]

export const COMMENT_LIST = [
  {
    rating: 5,
    name: 'Agung',
    comment:
      'Memuaskan sekali, kulit saya jadi bersih dan makin sehat. Terimakasih Dok',
  },
  {
    rating: 4,
    name: 'Toto',
    comment:
      'Pelayanan konsultasi memuaskan, kulit saya jadi bersih dan makin sehat. Terimakasih Dok',
  },
]
export const MEDICINE_LIST = [
  {
    image: 'https://placekitten.com/500',
    name: 'Betametason 100-mg',
    price: 5000,
    amount: 1,
    rate: 5,
    store: 'Bening official store',
    description: 'Deskripsi singkat',
    note: 'Oleskan tipis pada alergi bila terasa gatal',
  },
  {
    image: 'https://placekitten.com/300',
    name: 'Antithistamin-8 strip',
    price: 125000,
    amount: 2,
    rate: 5,
    store: 'Bening official store',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, soluta!',
    note: 'Minum 3 kali sehari sesudah makan',
  },
]

export const SUMMARY_LIST = [
  {
    id: 1,
    summary: 'Kemerahan pada permukaan kulit',
  },
  {
    id: 2,
    summary: 'Bercak merah di area hidung',
  },
]

export const FAQ_LIST = [
  {
    question: 'Bagaimana cara membatalkan jadwal konsultasi?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, similique officiis',
  },
  {
    question: 'Bagaimana cara mengubah jadwal konsultasi',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, similique officiis',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, similique officiis',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, similique officiis',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, similique officiis',
  },
]

export const NOTIF_LIST = [
  {
    date: '9 Mei 2022',
    body: [
      {
        title: 'Ada Jadwal Konsultasi Baru',
        note: 'Guntur Saputro telah menjadwalkan konsultasi pada tanggal 20 Januari 2022',
        hour: '08:20',
      },
      {
        title: 'Konsultasi dibatalkan',
        note: 'Admin menyetujui pembatalan jadwal konsultasi Guntur Saputro pada tanggal 20 Januari 2022',
        hour: '08:20',
        canceled: true,
      },
      {
        title: 'Konsultasi Selesai',
        note: 'Konsultasi Online Toto Prasetyo telah selesai',
        hour: '08:20',
      },
      {
        title: 'Konsultasi Online Dimulai',
        note: 'Konsultasi Online Toto Prasetyo telah dimulai',
        hour: '08:20',
      },
    ],
  },
  {
    date: '1 Februari 2022',
    body: [
      {
        title: 'Konsultasi Selesai',
        note: 'Lorem ipsum dolor sit amet',
        hour: '10:20',
      },
    ],
  },
  {
    date: '1 Februari 2022',
    body: [
      {
        title: 'Konsultasi Dimulai',
        note: 'Lorem ipsum dolor sit amet',
        hour: '09:30',
      },
    ],
  },
]
