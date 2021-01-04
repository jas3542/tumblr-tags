import { Component } from '@angular/core';
import { TagService } from './tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tumblr-tags';

  dataReceived:any= "default for now";
  constructor(private tagService: TagService ) {}

  public getTags() {
    this.tagService.getTags().subscribe((data: any) => {
      this.dataReceived = data;
      console.log(" hi! I found some tags!!",data);
    });
    
    
  }
}


