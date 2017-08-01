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
    this.initMolecules();
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

  initMolecules(): void {
    for (var i = this.numberMolecules - 1; i >= 0; i--) {
      this.molecules.push(this.createMolecule());
    }
  }

  createMolecule(): {} {
    let xPos = this.generatePosition(this.left, this.right);
    let yPos = this.generatePosition(this.top, this.bottom);
    let xVel = this.generateVelocity('any');
    let yVel = this.generateVelocity('any');
    return {
      position: {
        xPos: xPos,
        yPos: yPos
      },
      velocity: {
        xVel: xVel,
        yVel: yVel
      }
    }
  }

  generateVelocity(sign: string = 'any'): number {
    if (sign === 'any') {
      return Math.floor(Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity) * (Math.random() < 0.5 ? -1 : 1);
    } else if (sign === 'negative') {
      return -1 * Math.floor(Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity);
    } else if (sign === 'positive') {
      return Math.floor(Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity);
    }
  }

  generatePosition(minPos: number, maxPos: number): number {
    return Math.floor(Math.random() * (maxPos - minPos)) + minPos;
  }

}
