declare const superToolsLib: {
    accAdd: (num1: any, num2: number) => number;
    accSub: (num1: number, num2: number) => Number;
    accMul: (num1: number, num2: number) => number;
    accDiv: (num1: Number, num2: Number) => Number;
    formatPrice: (price: any, sign?: string) => string;
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
    Ajax: typeof import("./request/ajax").default;
    downBlob: (data: any, fileName: string) => void;
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
        set(user: string, name: string, value: any): void;
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
    throttle: (fn: Function, delay: number) => Function;
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
    getFitSize: (px: number, draft?: number) => number;
    initialToCapitali: (gname: string) => string;
    repeat: (str: string, n: number) => string;
    trim: (str: string) => string;
    validate: (key: string, value: string) => boolean;
    version: string;
};
export default superToolsLib;
