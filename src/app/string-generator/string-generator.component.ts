import { Component, OnInit } from '@angular/core';
import { Str } from '../models/str.model';
import { StrCheckService, strStatus } from '../services/string-check.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.scss']
})
export class StringGeneratorComponent implements OnInit {

  strAvg : number = 0;
  strings : Str[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  generate() {
    this.strings = [];

    interval(3000)
      .pipe(take(this.strAvg))
      .subscribe(() => {
        // ***************************************************
        // розкоментуйте, щоб впевнитись,
        // що поліндроми та числа підсвічуються своїми кольорами

        // let value = '55555';
        // let value = 'absba';
        // ****************************************************

        let value = Math.random().toString(36).substr(2, 5);
        let status = StrCheckService.check(value);
        let _class : string = '';

        switch (status) {
          case strStatus.palindrom:
            _class = 'item_red';
            break;
          case strStatus.onlyNums:
            _class = 'item_blue';
            break;
        }

        if(status != strStatus.hasZero) this.strings.push(new Str(value, _class));
      });
  }
}


