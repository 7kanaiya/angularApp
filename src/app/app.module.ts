import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { List } from './list';
import { userComponent } from './user.component';
import { GenderComponent } from './gender.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SongListComponent } from './songlist.component';
import { SongComponent } from './song.component';
import { ProductComponent } from './product.component';
import { MobileComponent } from './mobile.component';
import { LaptopsComponent } from './laptops.component';
import { KitchenComponent } from './kitchen.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ShimmerModule } from '@sreyaj/ng-shimmer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { customPipe } from './custom.pipe';
import { AlbumComponent } from './albums.component';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    userComponent,
    GenderComponent,
    ParentComponent,
    ChildComponent,
    SongListComponent,
    SongComponent,
    ProductComponent,
    MobileComponent,
    LaptopsComponent,
    KitchenComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    customPipe,
    AlbumComponent,
    SearchComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ShimmerModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  providers: [List],
  bootstrap: [AppComponent],
})
export class AppModule {}
