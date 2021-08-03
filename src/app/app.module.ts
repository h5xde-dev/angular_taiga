import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiNotificationsModule,
    TuiDialogModule,
    TuiRootModule,
    TuiScrollbarModule,
    TuiButtonModule
} from '@taiga-ui/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TuiIslandModule, TuiAvatarModule, TuiLineClampModule} from '@taiga-ui/kit';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiNotificationsModule,
        TuiDialogModule,
        TuiIslandModule,
        AppRoutingModule,
        TuiAvatarModule,
        TuiScrollbarModule,
        TuiButtonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}