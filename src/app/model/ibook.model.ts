// volume.model.ts

export interface IBookModel {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    layerInfo?: LayerInfo;
    saleInfo?: SaleInfo;
    accessInfo?: AccessInfo;
}

export interface IndustryIdentifiers {
    type: string;
    identifier: string;
}

export interface VolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    readingModes?: ReadingModes;
    pageCount?: number;
    industryIdentifiers?: IndustryIdentifiers[];
    printedPageCount?: number;
    dimensions?: Dimensions;
    printType?: string;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    panelizationSummary?: PanelizationSummary;
    imageLinks?: ImageLinks;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface Dimensions {
    height?: string;
    width?: string;
    thickness?: string;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
}

export interface LayerInfo {
    layers: Layer[];
}

export interface Layer {
    layerId: string;
    volumeAnnotationsVersion: string;
}

export interface SaleInfo {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    buyLink?: string;
}

export interface AccessInfo {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub?: Epub;
    pdf?: Pdf;
    webReaderLink?: string;
    accessViewStatus?: string;
    quoteSharingAllowed?: boolean;
}

export interface Epub {
    isAvailable: boolean;
    downloadLink?: string;
}

export interface Pdf {
    isAvailable: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
}
