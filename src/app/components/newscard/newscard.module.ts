import { NewscardComponent } from './newscard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NewscardComponent],
  imports: [CommonModule,IonicModule],
  exports: [NewscardComponent],
})
export class NewscardModule { }
