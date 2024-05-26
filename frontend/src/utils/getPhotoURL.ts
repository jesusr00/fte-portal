export interface Photo {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export const getPhotoURL = (photo?: Photo): string =>
  photo?.url ? `${import.meta.env.VITE_REACT_APP_API_URL}${photo.url}` : ''
