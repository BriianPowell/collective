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
    bio: {
      p1: 'I am a Software Engineer and an Unrelenting Tinkerer with a passion for solving difficult problems efficiently. My interests tend to lead me towards backend but I have a hard time saying no to a challenge.',
      p2: 'I like to describe myself as a hard working individual who loves to be apart of a team that fosters growth. My strengths come from my experiences, my previous roles, internships, and university, which have given me a strong foundation from which to move forward.',
    },
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
