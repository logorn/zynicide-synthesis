import { Component, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Component({
  selector: 'app-molecule',
  templateUrl: './molecule.html',
  styleUrls: ['./molecule.scss']
})
export class MoleculeComponent implements OnChanges {

  @Input() xPos: number;
  @Input() yPos: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'left', this.xPos.toString() + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'top', this.yPos.toString() + 'px');
  }

}
