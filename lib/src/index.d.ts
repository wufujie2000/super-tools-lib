interface Ajax {
    constructor(options: any);
    send(callback: Function, error: Function): void;
    set url(url: any);
    get url(): any;
}

declare const superToolsLib: {
    accAdd: (num1: any, num2: number) => number;
    accSub: (num1: number, num2: number) => Number;
    accMul: (num1: number, num2: number) => number;
    accDiv: (num1: Number, num2: Number) => Number;
    shuffle: (arr: any[]) => any[];
    smallRounding: (num: number, place: number) => number;
    dateFormater: (formater: string, time?: number) => string;
    formatPassTime: (startTime: any) => string;
    formatRemainTime: (endTime: any) => string;
    orient: () => void;
    vConsole: () => void;
    socket: ({ url }: {
        url: string;
    }) => any;
    Ajax: Ajax;
    downBlob: (data: any, fileName: string) => void;
    exportExcel: (column: any[], dataSource: any[], fileName?: string) => void;
    isBase64: (base64: any) => boolean;
    isArray: (arr: any) => boolean;
    isString: (str: any) => boolean;
    isFunction: (fn: any) => boolean;
    isObject: (obj: any) => boolean;
    isNumber: (num: any) => boolean;
    isWeiXin: () => boolean;
    isNull: (o: any) => boolean;
    isUndefined: (o: any) => boolean;
    isDate: (o: any) => boolean;
    isRegExp: (o: any) => boolean;
    isError: (o: any) => boolean;
    isSymbol: (o: any) => boolean;
    isPromise: (o: any) => boolean;
    returnType: (o: any) => any;
    isSupportWebP: () => boolean;
    deepClone: (data: any) => any;
    stringfyQueryString: (obj: Object) => string;
    arrayUnique: (arr: any[]) => any[];
    arrayNonRepeatfy: (arr: any[]) => any[];
    aLineUnique: (arr: any[]) => any[];
    bubbleSort: (arr: any) => any;
    getOffset: (ele: any) => any;
    shaking: ({ ele, attr, cb, rate, time }: {
        ele: any;
        attr: string;
        cb: Function;
        time?: number;
        rate?: number;
    }) => void;
    stopPropagation: (e: any) => void;
    hasClass: (ele: HTMLElement, name: string) => RegExpMatchArray;
    addClass: (ele: HTMLElement, name: string) => void;
    removeClass: (ele: HTMLElement, name: string) => void;
    replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
    numberRoll: (ele: any, targetNumber: number, duration: number) => void;
    getDistance: (startLon: number, startLat: number, endLon: number, endLat: number) => number;
    calcDistance: (lat1: any, lng1: any, lat2: any, lng2: any) => number;
    lonLatToMercator: (lonLat: {
        lon: number;
        lat: number;
    }) => any;
    mercatorToLonlat: (mercator: {
        x: number;
        y: number;
    }) => any;
    performanceAnalysis: () => void;
    getPerformanceTiming: () => any;
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
    print: (printEleId: string, rootEleId: string, style: string) => boolean;
    setVibration: () => void;
    copy: (str: string) => void;
    scrollToTop: () => void;
    userBrowser: () => string;
    guid: () => string;
    getFileBase64: (file: File, cb: Function) => void;
    isAndroidMobileDevice: () => boolean;
    isAppleMobileDevice: () => boolean;
    throttle: (func: Function, delay: number) => Function;
    debounce: (fn: Function, wait: number) => Function;
    fileDownload: (url: string) => boolean;
    fuzzyQuery: (list: any[], key: string, keyWord: string) => any[];
    getUrlParam: () => Object;
    getCookie: (name: string) => string;
    colorHex: (color: string) => string;
    viewportToPixels: (value: string) => number;
    noRefdelUrlParam: (ref: string) => string;
    getAge: (id: string) => string;
    getSex: (id: string) => "男" | "女";
    digitUppercase: (n: number) => string;
    hexToRgba: (str: string, alpa: number) => string;
    rgbaToHex: (color: any) => string;
    injectScript: (src: string) => void;
    sinogToLetter: (str: string) => string;
    initialToCapitali: (gname: string) => string;
    repeat: (str: string, n: number) => string;
    trim: (str: string) => string;
    validate: (key: string, value: string) => boolean;
    version: string;
};
export default superToolsLib;

export declare const accAdd: (num1: any, num2: number) => number;
export declare const accSub: (num1: number, num2: number) => number;
export declare const accMul: (num1: number, num2: number) => number;
export declare const accDiv: (num1: number, num2: number) => number;
export declare const formatPassTime: (startTime: any) => string;
export declare const formatRemainTime: (endTime: any) => string;
export declare const isNull: (o: any) => boolean;
export declare const isUndefined: (o: any) => boolean;
export declare const isDate: (o: any) => boolean;
export declare const isRegExp: (o: any) => boolean;
export declare const isError: (o: any) => boolean;
export declare const isSymbol: (o: any) => boolean;
export declare const isPromise: (o: any) => boolean;
export declare const returnType: (o: any) => any;
export declare const isSupportWebP: () => boolean;
export declare const stringfyQueryString: (obj: Object) => string;
export declare const bubbleSort: (arr: any) => any;
export declare const numberRoll: (ele: any, targetNumber: number, duration: number) => void;
export declare const userBrowser: () => string;
export declare const hasClass: (ele: HTMLElement, name: string) => RegExpMatchArray;
export declare const addClass: (ele: HTMLElement, name: string) => void;
export declare const removeClass: (ele: HTMLElement, name: string) => void;
export declare const replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
export declare const Ajax: Ajax;
export declare const injectScript: (src: string) => void;
export declare const sinogToLetter: (str: string) => string;
export declare const shuffle: (arr: any[]) => any[];
export declare const smallRounding: (num: number, place: number) => number;
export declare const dateFormater: (formater: string, time?: number) => string;
export declare const deepClone: (data: any) => any;
export declare const stopPropagation: (e: any) => void;
export declare const scrollToTop: () => void;
export declare const getAge: (id: string) => string;
export declare const getSex: (id: string) => "男" | "女";
export declare const digitUppercase: (n: number) => string;
export declare const hexToRgba: (str: string, alpa: number) => string;
export declare const rgbaToHex: (color: any) => string;
export declare const version: string;

export declare const orient: () => void;
export declare const vConsole: () => void;
export declare const socket: ({ url }: {
    url: string;
}) => any;
export declare const downBlob: (data: any, fileName: string) => void;
export declare const isBase64: (base64: any) => boolean;
export declare const isArray: (arr: any) => boolean;
export declare const isString: (str: any) => boolean;
export declare const isFunction: (fn: any) => boolean;
export declare const isObject: (obj: any) => boolean;
export declare const isNumber: (num: any) => boolean;
export declare const isWeiXin: () => boolean;
export declare const repeat: (str: string, n: number) => string;
export declare const cloneDeep: (obj: any) => any;
export declare const arrayUnique: (arr: any[]) => any[];
export declare const arrayNonRepeatfy: (arr: any[]) => any[];
export declare const aLineUnique: (arr: any[]) => any[];
export declare const getOffset: (ele: any) => any;
export declare const shaking: ({ ele, attr, cb, rate, time }: {
    ele: any;
    attr: string;
    cb: Function;
    time?: number;
    rate?: number;
}) => void;
export declare const getDistance: (startLon: number, startLat: number, endLon: number, endLat: number) => number;
export declare const calcDistance: (lat1: any, lng1: any, lat2: any, lng2: any) => number;
export declare const lonLatToMercator: (lonLat: {
    lon: number;
    lat: number;
}) => any;
export declare const mercatorToLonlat: (mercator: {
    x: number;
    y: number;
}) => any;
export declare const performanceAnalysis: () => void;
export declare const getPerformanceTiming: () => any;
export declare const toFullScreen: () => void;
export declare const exitFullscreen: () => void;
export declare const LocalStorage: {
    get(user: string, name: string): string;
    set(user: string, name: string, value: string): void;
    remove(user: string, name: string): void;
    clear(): void;
};
export declare const getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
export declare const winCopy: (flag: any) => void;
export declare const print: (printEleId: string, rootEleId: string, style: string) => boolean;
export declare const setVibration: () => void;
export declare const copy: (str: string) => void;
export declare const guid: () => string;
export declare const getFileBase64: (file: File, cb: Function) => void;
export declare const isAndroidMobileDevice: () => boolean;
export declare const isAppleMobileDevice: () => boolean;
export declare const throttle: (func: Function, delay: number) => Function;
export declare const debounce: (fn: Function, wait: number) => Function;
export declare const fileDownload: (url: string) => boolean;
export declare const fuzzyQuery: (list: any[], key: string, keyWord: string) => any[];
export declare const getUrlParam: () => Object;
export declare const getCookie: (name: string) => string;
export declare const colorHex: (color: string) => string;
export declare const viewportToPixels: (value: string) => number;
export declare const noRefdelUrlParam: (ref: string) => string;
export declare const initialToCapitali: (gname: string) => string;
export declare const trim: (str: string) => string;
export declare const validate: (key: string, value: string) => boolean;
export declare const exportExcel: (column: any[], dataSource: any[], fileName?: string) => void;

