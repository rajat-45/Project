import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents =[
MatInputModule,
MatFormFieldModule,
MatToolbarModule,
MatIconModule,
MatBadgeModule,
MatCardModule,
MatButtonModule,
MatDividerModule,
MatSidenavModule,
MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})

export class MaterialModule { }
