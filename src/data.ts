import IPersonalData from 'types/IPersonalData'

export const data: IPersonalData = {
  about: {
    name: 'Brian Powell',
    label: 'Software Engineer',
    description: "Welcome to Brian's Personal Portfolio",
    birthday: new Date(1995, 10, 2),
    summary: '',
    image_url: '',
    email: 'brian@powell.place',
    phone: '714.906.9211',
    location: 'Huntington Beach, California',
    website: {
      url: 'https://powell.place',
      pretty: 'powell.place',
    },
    about: 'I am a Software Engineer',
    profiles: [
      {
        network: 'Github',
        username: 'BriianPowell',
        url: 'https://github.com/BriianPowell',
      },
      {
        network: 'LinkedIn',
        username: 'BriianPowell',
        url: 'https://www.linkedin.com/in/briianpowell/',
      },
      {
        network: 'Twitter',
        username: 'briianpowell',
        url: 'https://twitter.com/briianpowell',
      },
      {
        network: 'Instagram',
        username: 'briianpowell',
        url: 'https://www.instagram.com/briianpowell/',
      },
    ],
  },
}
