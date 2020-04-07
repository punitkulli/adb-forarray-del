import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
processCheckListForm: FormGroup;

constructor(private fb: FormBuilder){}

ngOnInit(){
 const frontPageWaArray = new FormArray([]);
    const productInformationArray = new FormArray([]);
    const summarySheetDocsArray = new FormArray([]);
    const remarksArray = new FormArray([]);

    this.processCheckListForm = this.fb.group({
      itemRows: frontPageWaArray /* this.fb.array([this.initItemRows()]) */,
      itemRows1: productInformationArray,
      itemRows2: summarySheetDocsArray,
      itemRows3: remarksArray
    });

}

 addNewRow() {
   (<FormArray>this.processCheckListForm.get("itemRows3")).push(
      this.fb.group({
        processorRemarks: [""]
      })
    );
}


}
