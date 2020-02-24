import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//forms modules
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//environment import
import { environment } from "src/environments/environment";

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

//Components
import { SubmitFormComponent } from './submit-form/submit-form.component'
import { ArrayFormComponent } from './array-form/array-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SubmitFormComponent,
    NestedFormComponent,
    ArrayFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
