import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  constructor() { }

  toggleAccordion(event: MouseEvent) {
    const accordionItem = (event.target as HTMLElement).closest('.accordion-item');
    if (!accordionItem) return;

    const button = accordionItem.querySelector('button') as HTMLButtonElement;
    const itemToggle = button.getAttribute('aria-expanded');
    const accordionContent = accordionItem.querySelector('.accordion-content') as HTMLElement | null;

    const items = document.querySelectorAll('.accordion button');
    items.forEach(item => {
      const content = item.nextElementSibling as HTMLElement;
      if (content && content !== accordionContent) {
        item.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0';
      }
    });

    if (accordionContent) {
      if (itemToggle === 'false') {
        button.setAttribute('aria-expanded', 'true');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        button.setAttribute('aria-expanded', 'false');
        accordionContent.style.maxHeight = '0';
      }
    }
  }
}
