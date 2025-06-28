import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
})
export class CardsSectionComponent {
  cards: Card[] = [
    {
      title: 'Find creative meal ideas',
      desc: 'Hungry for something healthy and delicious? You are in the right spot!',
      imageSrc: 'assets/images/card-bg-1.jpg',
      btnLink: '/' + PAGES.RECIPES,
      btnLabel: "Let's get cooking",
      bgColor: 'bg-[#FAE345]',
    },
    {
      title: 'Create your own cookbook',
      desc: 'Find, create, upload and organise your favourite recipes, all in one place.',
      imageSrc: 'assets/images/card-bg-2.jpg',
      btnLink: '/' + PAGES.COOKBOOK,
      btnLabel: 'Get started',
      bgColor: 'bg-[#00A0DF]',
    },
  ];
}

type Card = {
  title: string;
  desc: string;
  imageSrc: string;
  btnLink: string;
  btnLabel: string;
  bgColor: string;
};
