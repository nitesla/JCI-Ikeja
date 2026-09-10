/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: boardofdirectors
 * Interface for BoardofDirectors
 */
export interface BoardofDirectors {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  memberName?: string;
  /** @wixFieldType text */
  memberRole?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  memberImage?: string;
  /** @wixFieldType text */
  memberBio?: string;
  /** @wixFieldType url */
  memberPortfolio?: string;
  /** @wixFieldType number */
  sortId?: number;
}


/**
 * Collection ID: eventsandprojects
 * Interface for EventsandProjects
 */
export interface EventsandProjects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  eventName?: string;
  /** @wixFieldType text */
  type?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType datetime */
  eventDate?: Date | string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType text */
  status?: string;
  /** @wixFieldType url */
  moreInfoUrl?: string;
}


/**
 * Collection ID: galleryimages
 * Interface for GalleryImages
 */
export interface GalleryImages {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  imageFile?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  dateTaken?: Date | string;
  /** @wixFieldType text */
  eventName?: string;
  /** @wixFieldType text */
  photographer?: string;
  /** @wixFieldType url */
  galleryUrl?: string;
}


/**
 * Collection ID: newmemberinterests
 * Interface for NewMemberInterests
 */
export interface NewMemberInterests {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  occupation?: string;
  /** @wixFieldType text */
  reasonForInterest?: string;
  /** @wixFieldType text */
  preferredContactMethod?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}


/**
 * Collection ID: newsletters
 * Interface for Newsletters
 */
export interface Newsletters {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType url */
  newsletterUrl?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  coverImage?: string;
  /** @wixFieldType number */
  issueNumber?: number;
}
