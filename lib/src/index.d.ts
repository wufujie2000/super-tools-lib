declare const superToolsLib: {
    socket: ({ url }: {
        url: string;
    }) => any;
    downBlob: (data: any, fileName: string) => void;
    isBase64: (base64: any) => boolean;
    isArray: (arr: any) => boolean;
    isString: (str: any) => boolean;
    isFunction: (fn: any) => boolean;
    isObject: (obj: any) => boolean;
    isNumber: (num: any) => boolean;
    isWeiXin: () => boolean;
    repeat: (obj: any) => void;
    arrayUnique: (arr: any[]) => any[];
    arrayNonRepeatfy: (arr: any[]) => any[];
    aLineUnique: (arr: any[]) => any[];
    getOffset: (ele: any) => any;
    shaking: ({ ele, attr, cb, rate, time }: {
        ele: any;
        attr: string;
        cb: Function;
        time?: number;
        rate?: number;
    }) => void;
    getDistance: (endLat: number, endLon: number, startLat: number, startLon: number) => number;
    lonLatToMercator: (lonLat: {
        lon: number;
        lat: number;
    }) => any;
    mercatorToLonlat: (mercator: {
        x: number;
        y: number;
    }) => any;
    performanceAnalysis: () => void;
    toFullScreen: () => void;
    exitFullscreen: () => void;
    LocalStorage: {
        get(user: string, name: string): string;
        set(user: string, name: string, value: string): void;
        remove(user: string, name: string): void;
        clear(): void;
    };
    getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
    winCopy: (flag: any) => void;
    print: (id: string, src: string) => void;
    setVibration: () => void;
    guid: () => string;
    getFileBase64: (file: File, cb: Function) => void;
    isAndroidMobileDevice: () => boolean;
    isAppleMobileDevice: () => boolean;
    throttle: (func: Function, delay: number) => Function;
    debounce: (fn: Function, wait: number) => Function;
    fileDownload: (url: string) => boolean;
    fuzzyQuery: (list: any[], key: string, keyWord: String) => any[];
    getUrlParam: () => Object;
    getCookie: (name: string) => string;
    colorHex: (color: string) => string;
    viewportToPixels: (value: string) => number;
    noRefdelUrlParam: (ref: string) => string;
    initialToCapitali: (gname: string) => string;
    trim: (str: string) => string;
    validate: (key: string, value: string) => boolean;
    version: string;
};
export default superToolsLib;
