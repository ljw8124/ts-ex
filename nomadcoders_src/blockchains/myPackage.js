
// JS 파일임에도 불구하고 타입스크립트 체크가 필요한 경우
// 아래 주석을 통해서 JS 처럼 타입스크립트처럼 인식함

// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config,debug
 * @returns {boolean}
 */
export function init(config) {
    return true;
}

/**
 * exit the project
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
