import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  //@Input()
  data:string='';

 onchange(value: string){
   //const d=event.target as HTMLInputElement;
   this.data=value;
 }

}
