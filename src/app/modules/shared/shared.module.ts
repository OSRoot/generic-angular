import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    VideoPlayerComponent,
    HeaderComponent,
    SpinnerComponent,
    SideMenuComponent,
    FooterComponent,
    AudioPlayerComponent,
    ImageViewerComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    VideoPlayerComponent, 
    HeaderComponent, 
    SpinnerComponent,
    SideMenuComponent,
    FooterComponent,
    AudioPlayerComponent,
    ImageViewerComponent,
  ]
})
export class SharedModule { }
