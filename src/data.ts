import { IPersonalData } from 'types/IPersonalData'

export const data: IPersonalData = {
  about: {
    name: 'Brian Powell',
    label: 'Full Stack Software Engineer',
    description: "Welcome to Brian's Personal Portfolio",
    birthday: new Date(1995, 11, 2),
    summary: '',
    image_url: '',
    email: 'brian@powell.place',
    phone: '714.906.9211',
    location: 'Huntington Beach, California',
    website: {
      url: 'https://powell.place',
      pretty: 'powell.place',
    },
    profiles: [
      {
        network: 'github',
        username: 'BriianPowell',
        url: 'https://github.com/BriianPowell',
      },
    ],
  },
}
