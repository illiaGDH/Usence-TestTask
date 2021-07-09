export enum strStatus {
  standart,
  palindrom,
  hasZero,
  onlyNums
}

export class StrCheckService {
  static status: strStatus;

  static check(str : string) : strStatus {
    this.status = strStatus.standart;

    this.polindromCheck(str);
    this.onlyNumsCheck(str);
    this.containsZero(str);

    return this.status;
  }

  private static polindromCheck(str: string) : void {
    let strReversed = str.split("").reverse().join("");;
    if (str == strReversed) this.status = strStatus.palindrom;
  }

  private static onlyNumsCheck(str: string) : void {
    if(/^[0-9]+$/.test(str)) this.status = strStatus.onlyNums;
  }

  private static containsZero(str : string) : void {
    if(str.includes('0')) this.status = strStatus.hasZero;
  }
}