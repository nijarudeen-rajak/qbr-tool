import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitAnalyticsDashboardComponent } from './admin-main-menu/git-analytics-dashboard/git-analytics-dashboard.component';
import { GitDashboardComponent } from './admin-main-menu/git-dashboard/git-dashboard.component';
import { SpinnerService } from './service/SpinnerService';
import { KibanaComponent } from './admin-main-menu/kibana/kibana.component';
import { AirbyteConnectionsComponent } from './admin-main-menu/airbyte-connections/airbyte-connections.component';
import { MetabaseConfigurationComponent } from './admin-main-menu/metabase-configuration/metabase-configuration.component';
import { AuthGuard } from './service/auth.guard';
import { QaSummaryDashboardComponent } from './admin-main-menu/qa-summary-dashboard/qa-summary-dashboard.component';
import { EngineeringProductivityComponent } from './admin-main-menu/engineering-productivity/engineering-productivity.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { state: 'home', title: 'Home'} },
  { path: 'home', component: GitAnalyticsDashboardComponent, data: { state: 'home', title: 'Home' }, canActivate: [SpinnerService], title: "QBR Tool - Git Analytics Dashboard" },
  { path: 'kibana-overview', component: KibanaComponent, data: { title: 'kibana Overview' } },
  { path: 'git-analytics-dashboard', component: GitAnalyticsDashboardComponent, data: { title: 'Git Analytics Dashboard' }, canActivate: [SpinnerService], title: "QBR Tool - Git Analytics Dashboard" },
  { path: 'qa-summary-dashboard', component: QaSummaryDashboardComponent, data: { title: 'Quality Assurance Dashboard' }, canActivate: [SpinnerService], title: "QBR Tool - Quality Summary Dashboard" },
  { path: 'engineering-productivity', component: EngineeringProductivityComponent, data: { title: 'Engineering Productivity Dashboard' }, canActivate: [SpinnerService], title: "QBR Tool - Engineering Productivity Dashboard" },
  { path: 'git-dashboard', component: GitDashboardComponent, data: { title: 'Git Dashboard' }, canActivate: [SpinnerService], title: "QBR Tool - Git Dashboard" },
  { path: 'metabase-configuration', component: MetabaseConfigurationComponent, data: { title: 'Configuration'}},
  { path: 'airbyte-connections', component: AirbyteConnectionsComponent, data: { title: 'Connections' } },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
