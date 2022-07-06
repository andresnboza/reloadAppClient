import { Component, Input, OnInit } from '@angular/core';

interface IReadme {
  createdAt: any;
  encoded: Object;
  file_name: String;
}

@Component({
  selector: 'app-readme-holder',
  templateUrl: './readme-holder.component.html',
  styleUrls: ['./readme-holder.component.scss'],
})
export class ReadmeHolderComponent implements OnInit {
  @Input() readme: any | IReadme;
  show = false;
  finalSentences: any = [];

  ngOnInit(): void {
    if (this.readme) {
      let encoded: any = this.readme.encoded;
      for (const item of Object.entries(encoded)) {
        this.finalSentences.push(item[1]);
      }
      this.show = true;
    }
  }
}
