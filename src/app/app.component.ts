import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  bannerImage = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
  expanded = false;
  index = 1;
  testForm = new FormGroup({
      testValue: new FormControl('', Validators.required),
  });

  collapsingText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
      'sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua.';

  get linesLimit(): number {
      return this.expanded ? 10 : 3;
  }

  expandText() {
      this.expanded = !this.expanded;
  }

  onIndexChange(index: number) {
      this.index = index;
  }
}
