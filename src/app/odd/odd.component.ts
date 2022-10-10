import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() number: number;//Added a property number, which will be type number, but its not initialized.
//So @Input now able to pass the data from outside into this component.
  constructor() { }

  ngOnInit(): void {
  }

}
