// volume.model.ts

export interface IBookModel {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: IVolumeInfo;
    layerInfo?: ILayerInfo;
    saleInfo?: ISaleInfo;
    accessInfo?: IAccessInfo;
}

export interface IIndustryIdentifiers {
    type: string;
    identifier: string;
}

export interface IVolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    readingModes?: IReadingModes;
    pageCount?: number;
    industryIdentifiers?: IIndustryIdentifiers[];
    printedPageCount?: number;
    dimensions?: IDimensions;
    printType?: string;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    panelizationSummary?: IPanelizationSummary;
    imageLinks?: IImageLinks;
    language?: string;
    categories?: string[];
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
}

export interface IReadingModes {
    text: boolean;
    image: boolean;
}

export interface IDimensions {
    height?: string;
    width?: string;
    thickness?: string;
}

export interface IPanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface IImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
}

export interface ILayerInfo {
    layers: ILayer[];
}

export interface ILayer {
    layerId: string;
    volumeAnnotationsVersion: string;
}

export interface ISaleInfo {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    buyLink?: string;
}

export interface IAccessInfo {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string; // для аудиокниги
    epub?: IEpub;
    pdf?: IPdf;
    webReaderLink?: string; // для читалки
    accessViewStatus?: string;
    quoteSharingAllowed?: boolean;
}

export interface IEpub {
    isAvailable: boolean;
    downloadLink?: string;
}

export interface IPdf {
    isAvailable: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
}
