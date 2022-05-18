export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
}

export interface ImageAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: Date
  updatedAt: Date
}

export interface ImageData {
  id: number
  attributes: ImageAttributes
}

export interface Image {
  data: ImageData[]
}

export interface CarouselImage {
  data: ImageData
}
