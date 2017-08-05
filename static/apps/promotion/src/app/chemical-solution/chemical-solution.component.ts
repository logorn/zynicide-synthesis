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
  moveMoleculesTimeout;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.calculateDimensions();
    this.initMolecules();
    this.moveMolecules();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resetSolution();
  }

  calculateDimensions(): void {
     this.bottom = this.el.nativeElement.offsetHeight;
     this.top = this.el.nativeElement.offsetTop;
     this.right = this.el.nativeElement.offsetWidth;
     this.left = this.el.nativeElement.offsetLeft;
     // Linear decrease left too few molecules on mobile, use log
     this.numberMolecules = Math.floor(Math.log(window.innerWidth / 70) * 6.67);
     console.log(this.numberMolecules);
  }

  initMolecules(): void {
    for (var i = this.numberMolecules - 1; i >= 0; i--) {
      this.molecules.push(this.createMolecule());
    }
  }

  moveMolecules(): void {
    for (var i = this.molecules.length - 1; i >= 0; i--) {
      let currentMolecule = this.molecules[i]
      currentMolecule.position.xPos += currentMolecule.velocity.xVel;
      currentMolecule.position.yPos += currentMolecule.velocity.yVel;
      // If the molecule moves off of the screen, reset it
      if (currentMolecule.position.xPos < this.left || currentMolecule.position.xPos > this.right || currentMolecule.position.yPos < this.top || currentMolecule.position.yPos > this.bottom) {
        let randomPlacement = Math.random();
        let startOnSide = randomPlacement < 0.5 ? true: false;
        if (startOnSide) {
          let startOnLeft = randomPlacement < 0.25 ? true : false;
          if (startOnLeft) {
            currentMolecule.position.xPos = this.left;
            currentMolecule.velocity.xVel = this.generateVelocity('positive');
          } else {
            currentMolecule.position.xPos = this.right;
            currentMolecule.velocity.xVel = this.generateVelocity('negative');
          }
          currentMolecule.position.yPos = this.generatePosition(this.top, this.bottom);
          currentMolecule.velocity.yVel = this.generateVelocity('any');
        } else {
          let startOnTop = randomPlacement < 0.75 ? true : false;
          if (startOnTop) {
            currentMolecule.position.yPos = this.top;
            currentMolecule.velocity.yVel = this.generateVelocity('positive');
          } else {
            currentMolecule.position.yPos = this.bottom;
            currentMolecule.velocity.yVel = this.generateVelocity('negative');
          }
          currentMolecule.position.xPos = this.generatePosition(this.left, this.right);
          currentMolecule.velocity.xVel = this.generateVelocity('any');
        }
      }
    }
    this.moveMoleculesTimeout = setTimeout(() => {
      this.moveMolecules();
    }, 20);
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

  resetSolution() {
    this.calculateDimensions();
    this.molecules = [];
    clearTimeout(this.moveMoleculesTimeout);
    this.initMolecules();
    this.moveMolecules();
  }

}
