export default class StringUtil {
	/**
	 * Capitalizes the first letter of the input string.
	 * @param {string} str - The string to capitalize.
	 * @returns {string} The capitalized string.
	 */
	static capitalize(str: string): string {
		if (str.length === 0) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Truncates the input string to a specified maximum length and appends an ellipsis ("...") if the string exceeds that length.
	 * @param {string} str - The string to truncate.
	 * @param {number} maxLength - The maximum length of the truncated string.
	 * @returns {string} The truncated string with an ellipsis if it exceeds the maximum length.
	 */
	static truncate(str: string, maxLength: number): string {
		if (str.length <= maxLength) return str;
		return str.slice(0, maxLength) + '...';
	}

	/**
	 * Removes double spaces and trims leading/trailing spaces from the input string.
	 * @param {string} str - The string to process.
	 * @returns {string} The input string with double spaces removed and leading/trailing spaces trimmed.
	 */
	static removeDoubleAndTrailingSpace(str: string): string {
		return str.trim().replace(/ +(?= )/g, '');
	}

	/**
	 * Capitalizes the first letter of each word in the input string, except for certain small words (a, an, the, of, to, or).
	 * @param {string} str - The string to capitalize.
	 * @returns {string} The capitalized string.
	 */
	static capitalizeFirstLetter(str: string): string {
		if (str === undefined || str === '' || str === null || str === 'null')
			return '';
		const stringArr = str.split(' ');
		for (let i = 0; i < stringArr.length; i++) {
			if (
				stringArr[i] === 'a' ||
				stringArr[i] === 'an' ||
				stringArr[i] === 'the' ||
				stringArr[i] === 'of' ||
				stringArr[i] === 'to' ||
				stringArr[i] === 'or'
			) {
				continue;
			} else {
				stringArr[i] =
					stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
			}
		}
		return stringArr.join(' ');
	}

	/**
	 * Returns the URL of an image located in the specified source folder within the assets directory.
	 * @param {string} imageName - The name of the image file.
	 * @param {string} src - The source folder within the assets directory where the image is located. Defaults to 'profiles'.
	 * @returns {string} URL of the image located in the specified source folder within the assets directory.
	 */
	static getImageUrl(imageName: string, src: string = 'profiles'): string {
		return new URL(`../../assets/${src}/${imageName}`, import.meta.url).href;
	}
}
