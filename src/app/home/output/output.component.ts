import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private _interaction: InteractionService) { }
  displayShape?: string
  displayCount?: any
  arr: number[] = []
  ngOnInit(): void {
    this._interaction.teacherMessage$.subscribe((data: any) => {
      this.displayCount = data.count
      this.displayShape = data.shape

      this.seriesGen(this.displayCount)

    })
  }


  seriesGen(value: number) {
    this.arr = []
    let num = 2
    for (let i = 2; i < value; i++) {

      for (let j = 0; j < i; j++) {
        
        if(this.arr.length < value)
        {
          this.arr.push(num)
          num = num + i
        }
        else{
          break
        }

      }
    }
    console.log(this.arr)
  }
}
