export interface Attributes {
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface StrapiData<T> {
  id: number
  attributes: T
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface StrapiRootArray<T> {
  data: StrapiData<T>[]
  meta: Meta
}

export interface StrapiRoot<T> {
  data: StrapiData<T>
  meta: Meta
}
