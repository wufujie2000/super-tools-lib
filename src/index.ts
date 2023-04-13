import { version } from '../package.json'

import {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
} from './string'

import {
    guid,
    throttle,
    debounce,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    getAge,
    getSex,
    digitUppercase,
    hexToRgba,
    rgbaToHex,
    injectScript,
    sinogToLetter,
    getFitSize,
    checkPassWord,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    sortAscii,
    generateSign,
} from './tools'

import {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    noRefdelUrlParam,
} from './bom'



import { validate } from './reg'

import {
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    scrollToTheBottom,
    textVisibilityChange,
    getTransformMatrix,
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    eleReplace,
    insertHtmlBefore,
    getAttr,
    setAttr,
    getDomBound,
} from './dom'

import {
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
    shuffle,
    reduce,
} from './array'

import {
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
} from './object'

import {
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin,
    isNull,
    isUndefined,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    returnType,
    isSupportWebP,
    isMobile,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    isBasicType,
    isSet,
    isMap,
    isOdd,
    isEven,
    isDescendant,
} from './is'

import { isEqual } from './is/_isEqual'

import { isContain } from './is/_isContain'

import {
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    fileDownload,
} from './file'

import { vConsole } from './console'

import {
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getSecond,
    getFirstDate,
} from './date'

import {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
} from './number'

import {
    forEach,
    filter,
} from './loop'

import { map } from './loop/map'

import {
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    IndexedDB,
    RunWorker,
    Socket,
    StateObserver,
    getState, setState, deleteState, addStateListener, removeStateListener,
    FastMap,
    Dom,
    $,
} from './class'


import {
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    lonLatToMercator,
    mercatorToLonlat,
    scalePolygon,
} from './math'


import { sendRequest } from './request'


export default {
    scalePolygon,
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    StateObserver,
    FastMap,
    Dom,
    $,
    getState,
    setState,
    deleteState,
    addStateListener,
    removeStateListener,
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    sortAscii,
    generateSign,
    forEach,
    filter,
    map,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
    shuffle,
    reduce,
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getSecond,
    getFirstDate,
    Socket,
    vConsole,
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    isContain,
    isEqual,
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin,
    isNull,
    isUndefined,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    returnType,
    isSupportWebP,
    isMobile,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    isBasicType,
    isSet,
    isMap,
    isOdd,
    isEven,
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    scrollToTheBottom,
    textVisibilityChange,
    getTransformMatrix,
    isDescendant,
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    eleReplace,
    getAttr,
    setAttr,
    getDomBound,
    insertHtmlBefore,
    validate,
    lonLatToMercator,
    mercatorToLonlat,
    IndexedDB,
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    guid,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getAge,
    getSex,
    digitUppercase,
    hexToRgba,
    rgbaToHex,
    injectScript,
    sinogToLetter,
    getFitSize,
    checkPassWord,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
    version,
    RunWorker,
    sendRequest,
}

export {
    scalePolygon,
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    StateObserver,
    getState,
    FastMap,
    Dom,
    $,
    setState,
    deleteState,
    addStateListener,
    removeStateListener,
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    sortAscii,
    generateSign,
    forEach,
    filter,
    map,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
    shuffle,
    reduce,
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getSecond,
    getFirstDate,
    Socket,
    vConsole,
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    isContain,
    isEqual,
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin,
    isNull,
    isUndefined,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    returnType,
    isSupportWebP,
    isMobile,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    isBasicType,
    isSet,
    isMap,
    isOdd,
    isEven,
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    scrollToTheBottom,
    textVisibilityChange,
    getTransformMatrix,
    isDescendant,
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    eleReplace,
    getAttr,
    setAttr,
    getDomBound,
    insertHtmlBefore,
    validate,
    lonLatToMercator,
    mercatorToLonlat,
    IndexedDB,
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    guid,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getAge,
    getSex,
    digitUppercase,
    hexToRgba,
    rgbaToHex,
    injectScript,
    sinogToLetter,
    getFitSize,
    checkPassWord,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
    version,
    RunWorker,
    sendRequest,
}