import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {
    console.log('Constructor Called!');
  }

  ngOnChanges() {
    console.log('Onchanges called!');
  }

  ngOnInit() {
    console.log('OnInit Called!');
  }
}
