import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
collection:any=[];
  constructor(private resto:RestoService) { }

  ngOnInit(): void {

    this.resto.getList().subscribe((result)=>{
      this.collection=result;
      console.log(result);
    });
  }
   deleteResto(item:any){
    console.warn(this.collection);
    let indexToRemove = this.collection.findIndex((obj: { id: any; }) => obj.id == item);

    // If indexToRemove is not -1 (meaning object found), remove it
    if (indexToRemove !== -1) {
        this.collection.splice(indexToRemove, 1);
    }

    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn(result);
      this.collection.splice(item-1,1);
    })

   }
}
