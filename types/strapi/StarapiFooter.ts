export interface Attributes2 {
  text: string
  url: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Datum {
  id: number
  attributes: Attributes2
}

export interface Socials {
  data: Datum[]
}

export interface StarapiFooter {
  address: string
  phone: string
  email: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  aboutText: string
  socials: Socials
}
