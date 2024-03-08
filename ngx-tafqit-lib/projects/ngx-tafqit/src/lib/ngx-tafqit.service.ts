import { Injectable } from '@angular/core';
import { Pound, Egyptian, Aat, TaaMarbota, Tanween, Starter, Ender, Scales, Aan, AndWrd, ScalesPlural, Hundreds, Ten, Units } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NgxTafqitService {

  constructor() { }
  /**
* Formats a number into Arabic text representing currency in the Tafqeet style.
* Tafqeet is a method of representing numbers in Arabic words.
* 
* @param {number} num - The number to be formatted into Arabic currency text.
* @returns {string} The formatted Arabic currency text.
*/
  tafqit(num: number): string {
    // Initialize variables for currency formatting and result
    let currencyFormat = '';
    let result = '';

    // Get the last two digits of the number to determine currency format
    let absTenOfNum = Math.abs(num) % 100;

    // Determine currency format based on the last two digits of the number
    if (absTenOfNum <= 2) {
      currencyFormat = Pound + ' ' + Egyptian;
    } else if (absTenOfNum >= 3 && absTenOfNum <= 10) {
      currencyFormat = Pound + Aat + ' ' + Egyptian + TaaMarbota;
    } else {
      currencyFormat = Pound + Tanween + ' ' + Egyptian + Tanween;
    }

    // Convert the number to Arabic text
    result = this.numberToArabic(num);

    // Concatenate the result with currency format and additional text
    result = Starter + result + ' ' + currencyFormat + Ender;

    // Replace double spaces with single spaces in the result
    return result.replace('  ', ' ').trim();
  }

  /**
 * Converts a given number into Arabic text representation.
 * 
 * @param {number} num - The number to be converted into Arabic text.
 * @returns {string} The Arabic text representation of the given number.
 * @private
 */
  private numberToArabic(num: number): string {
    // Check if the number is zero and return its Arabic text representation
    if (num === 0) {
      return 'صفر';
    }

    let result = ''; // Initialize the variable to store the Arabic text representation

    // Handle negative numbers
    if (num < 0) {
      result += 'سالب';
      num = Math.abs(num);
    }

    // Convert billions
    if (num >= 1000000000) {
      // Handle special cases for billions
      if (Math.floor(num / 1000000000) <= 2) {
        Math.floor(num / 1000000000) == 2 ? result += Scales[3] + Aan + ' ' + AndWrd : result += Scales[3] + ' ' + AndWrd;
      } else {
        // Recursive call for numbers greater than 2 billion
        result += Math.floor(num / 1000000000) > 19 || Math.floor(num / 1000000000) == 12 ?
          this.numberToArabic(Math.floor(num / 1000000000)) + ' ' + Scales[3] + Tanween + ' ' + AndWrd :
          this.numberToArabic(Math.floor(num / 1000000000)) + ' ' + ScalesPlural[3] + ' ' + AndWrd;
      }
      num %= 1000000000;
    }

    // Convert millions
    if (num >= 1000000) {
      // Handle special cases for millions
      if (Math.floor(num / 1000000) <= 2) {
        Math.floor(num / 1000000) == 2 ? result += Scales[2] + Aan + ' ' + AndWrd : result += Scales[2] + ' ' + AndWrd;
      } else {
        // Recursive call for numbers greater than 2 million
        result += Math.floor(num / 1000000) > 19 || Math.floor(num / 1000000) == 12 ?
          this.numberToArabic(Math.floor(num / 1000000)) + ' ' + Scales[2] + Tanween + ' ' + AndWrd :
          this.numberToArabic(Math.floor(num / 1000000)) + ' ' + ScalesPlural[2] + ' ' + AndWrd;
      }
      num %= 1000000;
    }

    // Convert thousands
    if (num >= 1000) {
      // Handle special cases for thousands
      if (Math.floor(num / 1000) <= 2) {
        Math.floor(num / 1000) == 2 ? result += Scales[1] + Aan + ' ' + AndWrd : result += Scales[1] + ' ' + AndWrd;
      } else {
        // Recursive call for numbers greater than 2 thousand
        result += Math.floor(num / 1000) % 100 > 19 || Math.floor(num / 1000) == 12 ?
          this.numberToArabic(Math.floor(num / 1000)) + ' ' + Scales[1] + Tanween :
          this.numberToArabic(Math.floor(num / 1000)) + ' ' + ScalesPlural[1] + ' ';
      }
      num %= 1000;
      num % 1000 > 0 ? result += ' ' + AndWrd : result;
    }

    // Convert hundreds
    if (num >= 100) {
      result += Hundreds[Math.floor(num / 100)] + ' ';
      num %= 100;
      num % 100 > 0 ? result += AndWrd : result;
    }

    // Convert tens
    if (num >= 20) {
      result += num % 10 == 0 ? Ten[Math.floor(num / 10)] : Units[num % 10] + ' ' + AndWrd + Ten[Math.floor(num / 10)];
    }

    // Convert units
    if (num <= 19) {
      result += Units[num];
    }

    return result.trim(); // Remove leading and trailing spaces from the result
  }

}

