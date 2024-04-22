import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  sectionIndex = 0;

  setIndex() {
    const slider = document.querySelector('.slider') as HTMLElement;
    const indicatorParents = document.querySelector('.controls ul') as HTMLElement;
    const selectedIndicator = document.querySelector('.controls .selected') as HTMLElement;

    if (selectedIndicator) {
      selectedIndicator.classList.remove('selected');
    }

    slider.style.transform = `translate(${this.sectionIndex * -25}%)`;
    indicatorParents.children[this.sectionIndex].classList.add('selected');
  }

  onIndicatorClick(ind: number) {
    this.sectionIndex = ind;
    this.setIndex();
  }

  onRightArrowClick() {
    this.sectionIndex = (this.sectionIndex < 3) ? this.sectionIndex + 1 : 3;
    this.setIndex();
  }

  onLeftArrowClick() {
    this.sectionIndex = (this.sectionIndex > 0) ? this.sectionIndex - 1 : 0;
    this.setIndex();
  }
}

