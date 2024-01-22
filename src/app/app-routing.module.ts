import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitAnalyticsDashboardComponent } from './admin-main-menu/git-analytics-dashboard/git-analytics-dashboard.component';
import { GitDashboardComponent } from './admin-main-menu/git-dashboard/git-dashboard.component';
import { SpinnerService } from './service/SpinnerService';
import { KibanaComponent } from './admin-main-menu/kibana/kibana.component';
import { AirbyteConnectionsComponent } from './admin-main-menu/airbyte-connections/airbyte-connections.component';
import { MetabaseConfigurationComponent } from './admin-main-menu/metabase-configuration/metabase-configuration.component';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { state: 'home', title: 'Home', canActivate: [KeycloakAuthGuard] } },
  { path: 'home', component: GitAnalyticsDashboardComponent, data: { state: 'home', title: 'Home' }, canActivate: [SpinnerService], title: "OBR Tool - Git Analiytics Dashboard" },
  { path: 'kibana-overview', component: KibanaComponent, data: { title: 'kibana Overview' } },
  { path: 'git-analytics-dashboard', component: GitAnalyticsDashboardComponent, data: { title: 'Git Analiytics Dashboard' }, canActivate: [SpinnerService], title: "OBR Tool - Git Analiytics Dashboard" },
  { path: 'git-dashboard', component: GitDashboardComponent, data: { title: 'Git Dashboard' }, canActivate: [SpinnerService, KeycloakAuthGuard], title: "OBR Tool - Git Dashboard" },
  { path: 'metabase-configuration', component: MetabaseConfigurationComponent, canActivate: [AuthGuard], data: { title: 'Configuration'}},
  { path: 'airbyte-connections', component: AirbyteConnectionsComponent, data: { title: 'Connections' } },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
