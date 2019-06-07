import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems = [];
  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
         let medium = params['medium'];
         if(medium.toLowerCase() === 'all') {
           medium = '';
         }
         this.getMediaItems(medium);
      });
    }
  
onMediaItemDelete(mediaItem) {
  this.mediaItemService.delete(mediaItem).subscribe(()=> {
    this.getMediaItems(this.medium);
  });
}
getMediaItems(medium) {
this.medium = medium;
this.mediaItemService.get(medium)
.subscribe(mediaItems => {
  this.mediaItems = mediaItems;
});
}
}
