export interface IPersonalData {
  about: {
    /** Your full name as it should appear on your resume */
    name: string;
    /**
     * A short description of what you do
     * @example "Full Stack Software Engineer"
     */
    label?: string;
    description?: string;
    birthday?: Date;
    sign?: string;
    /** A longer description of yourself */
    summary?: string;
    /** URL to image of yourself or a personal logo */
    image_url?: string;
    email?: string;
    phone?: string;
    /**
     * Your physical location.
     * This could be your address, or just a city, etc
     */
    location?: string;
    bio?: {
      p1: string;
      p2: string;
    };
    website?: {
      /**
       * Actual URL
       * @example "https://powell.place"
       */
      url: string;
      /**
       * Pretty version of URL
       * @example "powell.place"
       */
      pretty: string;
    };
    profiles?: {
      /** Name of the social network */
      network: string;
      /**
       * Your username on the network
       * @example "BriianPowell"
       */
      username: string;
      /**
       * A link to your profile on the network
       * @example "https://github.com/BriianPowell"
       */
      url: string;
    }[];
    services?: {
      iconSrc?: string;
      iconSize?: number;
      iconAlt?: string;
      title?: string;
      text?: string;
    }[];
    education?: {
      organization?: string;
      duration?: string;
      title?: string;
      text?: string;
    }[];
    experience?: {
      organization?: string;
      duration?: string;
      title?: string;
      text?: string;
    }[];
    certificates?: {
      title?: string;
      organization?: string;
      link?: string;
    }[];
  };
}
