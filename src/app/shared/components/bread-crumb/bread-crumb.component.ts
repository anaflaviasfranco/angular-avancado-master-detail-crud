import { Component, OnInit , Input} from '@angular/core';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() Itens: Array<BreadCrumbItem> = [];

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem( item: BreadCrumbItem): boolean {
    const index = this.Itens.indexOf(item);
    return index + 1 === this.Itens.length;
  }

}
