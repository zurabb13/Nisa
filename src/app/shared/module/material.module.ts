import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const UX = [
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressBarModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...UX],
  exports: [...UX],
})
export class MaterialModule {}
