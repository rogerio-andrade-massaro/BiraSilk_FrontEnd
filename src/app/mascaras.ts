export class Mascaras{
    public maskPhoneSpecial: Array<string | RegExp>
    public maskdate: Array<string | RegExp>
    public masktime: Array<string | RegExp>
    public maskdate_time: Array<string | RegExp>
    public maskcep: Array<string | RegExp>
    public maskphone: Array<string | RegExp>
    public maskphone_with_ddd: Array<string | RegExp>
    public maskphone_us: Array<string | RegExp>
    public maskmixed: Array<string | RegExp>
    public maskcpf: Array<string | RegExp>
    public maskcnpj: Array<string | RegExp>
    public maskmoney: Array<string | RegExp>
    public maskmoney2: Array<string | RegExp>

    public format(value : String, pattern) {
        
      var i = 0,
          v = value.toString();
        return pattern.replace(/#/g, _ => v[i++]);
      }

    constructor() {
      this.maskPhoneSpecial = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      this.maskdate = ['00/00/0000'];
      this.masktime = ['00:00:00'];
      this.maskdate_time = ['00/00/0000 00:00:00'];
      this.maskcep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/];
      this.maskphone = ['0000-0000'];
      this.maskphone_with_ddd = ['(00) 0000-0000'];
      this.maskphone_us = ['(000) 000-0000'];
      this.maskmixed = ['AAA 000-S0S'];
      this.maskcpf = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/];
      this.maskcnpj = ['00.000.000/0000-00'];
      this.maskmoney = ['000.000.000.000.000,00'];
      this.maskmoney2 = ["#.##0,00"];
      }
}