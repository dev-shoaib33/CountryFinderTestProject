import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import for routing


import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectService } from './project.service';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'add-project', component: AddProjectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)  // Add this for routing configuration
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
