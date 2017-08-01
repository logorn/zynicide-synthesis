import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-chemical-solution',
  templateUrl: './chemical-solution.html',
  styleUrls: ['./chemical-solution.scss']
})
export class ChemicalSolutionComponent implements OnInit {

  left: number = 0;
  right: number = 0;
  top: number = 0;
  bottom: number = 0;
  numberMolecules: number = 20;
  maxVelocity: number = 5;
  minVelocity: number = 1;
  molecules = []

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.calculateDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateDimensions()
  }

  calculateDimensions(): void {
     this.bottom = this.el.nativeElement.offsetHeight;
     this.top = this.el.nativeElement.offsetTop;
     this.right = this.el.nativeElement.offsetWidth;
     this.left = this.el.nativeElement.offsetLeft;
  }

}
