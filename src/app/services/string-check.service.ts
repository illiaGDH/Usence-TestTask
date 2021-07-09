export enum strStatus {
  standart,
  palindrom,
  hasZero,
  onlyNums
}

export class StrCheckService {

  static check(str : string) : strStatus {

    let strReversed = str.split("").reverse().join("");
    
    if (str == strReversed) return strStatus.palindrom;
    else if(/^[0-9]+$/.test(str)) return strStatus.onlyNums;
    else if(str.includes('0')) return strStatus.hasZero;
    else return strStatus.standart;
  }
}