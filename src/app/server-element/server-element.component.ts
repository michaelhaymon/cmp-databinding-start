import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('Constructor Called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Onchanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
    console.log('Paragraph Content: ', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
    console.log('Paragraph Content: ', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('onDestroy Called!');
  }
}
