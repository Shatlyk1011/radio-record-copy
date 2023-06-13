export interface ITag {
  id: number
  name: string
  detail_picture: string
  picture: string
  svg: string
  pdf: string
}

export interface IGenre {
  id: number
  name: string
  detail_picture?: string | null
  picture?: string | null
  svg?: string | null
  pdf?: string | null
}

export interface IStation {
  id: number
  prefix: string
  title: string
  tooltip: string
  sort: number
  bg_color: string | null
  bg_image: string
  bg_image_mobile: string
  svg_outline: string
  svg_fill: string
  pdf_outline: string | null
  pdf_fill: string | null
  short_title: string
  icon_gray: string
  icon_fill_colored: string
  icon_fill_white: string
  new: boolean
  new_date?: string | null
  stream_64: string
  stream_128: string
  stream_320: string
  stream_hls: string
  genre: IGenre[]
  detail_page_url: string
  shareUrl: string
  mark: null
  updated: string
}
