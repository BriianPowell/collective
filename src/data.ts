import backIcon from 'images/icon-backend1.png';
import cicdIcon from 'images/icon-cicd2.png';
import cloudIcon from 'images/icon-cloud1.png';
import frontIcon from 'images/icon-dev1.svg';

import { IPersonalData } from 'types/index';

export const data: IPersonalData = {
  about: {
    name: 'Brian Powell',
    label: 'Software Engineer',
    description: "Welcome to Brian's Personal Portfolio",
    birthday: new Date(1995, 10, 2),
    sign: 'Scorpio',
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
      p1: 'I am a Software Engineer and an unrelenting tinkerer with a passion for solving difficult problems efficiently. My interests tend to lead me towards backend but I have a hard time saying no to a challenge.',
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
    services: [
      {
        iconSrc: cloudIcon.src,
        iconSize: 75,
        iconAlt: 'Cloud Enablement',
        title: 'Cloud Enablement',
        text: 'Implementing Terraform, Terragrunt, and AWS CDK to enable high Cloud utilization',
      },
      {
        iconSrc: cicdIcon.src,
        iconSize: 85,
        iconAlt: 'Continuous Integration, Continuous Deployment',
        title: 'CI/CD',
        text: 'Embracing the latest CI/CD patterns and technologies to minimize technological debt',
      },
      {
        iconSrc: frontIcon.src,
        iconSize: 70,
        iconAlt: 'Front End',
        title: 'Front End',
        text: 'Designing and deploying SPA frameworks ontop of serverless architectures',
      },
      {
        iconSrc: backIcon.src,
        iconSize: 75,
        iconAlt: 'Back End',
        title: 'Back End',
        text: 'Architecting and constructing highly efficient systems with minimal infrastructural overhead',
      },
    ],
    education: [
      {
        organization: 'California State University, Long Beach',
        duration: '2016 - 2018',
        title: 'Bachelor of Science (BS), Computer Science',
        text: "Activities and Societies: Sigma Chi Fraternity//Graduated with a Bachelor's Degree in Computer Science with a 3.0 GPA.",
      },
      {
        organization: 'Santiago Canyon College',
        duration: '2013 - 2016',
        title: 'Associate of Science (AS) for Transfer, Physics, Mathematics',
        text: 'Activities and Societies: Indoor and outdoor intramural soccer, (Stem)^2//Succeeded in completing my tenure and graduated with a 3.1 GPA',
      },
    ],
    experience: [
      {
        organization: 'Mckinsey & Company',
        duration: '2022 - Present',
        title: 'Engineer II, Cloud',
        text: '',
      },
      {
        organization: 'First American Financial Corporation',
        duration: '2019 - 2022',
        title: 'Software Engineer',
        text: 'Developed and deployed a C# SDK for internal applications to seamlessly integrate with backend APIs hosted on AWS API Gateway//Contributed to several applications (C#, Python, JavaScript) to successfully modernize them from our on-premises server warehouse to a server-less architecture within AWS//Utilized several AWS offerings to build out applications in an effective manner (AWS API Gateway, S3, CloudFront, DocumentDB, RDS, AWS Lambda, etc.)//Incorporated Terraform/Terragrunt to efficiently maintain and deploy applications using CI/CD pipelines to quickly delivery updates and improvements to applications',
      },
    ],
    certificates: [
      {
        title: 'Solutions Architect - Associate',
        organization: 'Amazon Web Services (AWS)',
        link: 'https://www.credly.com/badges/1861a356-44d4-47ea-9276-f41af470d87c',
      },
    ],
  },
};
