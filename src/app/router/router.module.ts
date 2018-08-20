import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { GitApiComponent } from '../git-api/git-api.component';
import { RepositoriesComponent } from '../repositories/repositories.component';

const routes: Routes = [

  { path: '', redirectTo: 'git-api', pathMatch: 'full' },
  { path: "git-api", component: GitApiComponent },
  { path: "repositories", component: RepositoriesComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
