export interface PersonalData {
  about: {
    /** Your full name as it should appear on your resume */
    name: string
    /**
     * A short description of what you do
     * @example "Full Stack Software Engineer"
     */
    label?: string
    /** A longer description of yourself */
    summary?: string
    /** URL to image of yourself or a personal logo */
    image_url?: string
    email?: string
    phone?: string
    /**
     * Your physical location.
     * This could be your address, or just a city, etc
     */
    location?: string
    website?: {
      /**
       * Actual URL
       * @example "https://orleans.io"
       */
      url: string
      /**
       * Pretty version of URL
       * @example "orleans.io"
       */
      pretty: string
    }
  }
}
