import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  codes=[
    `<ts-icon name="file"></ts-icon>
  <ts-icon name="file-text-o"></ts-icon>
  <ts-icon name="file-image-o"></ts-icon>
  <ts-icon name="file-photo-o"></ts-icon>
  <ts-icon name="file-movie-o"></ts-icon>
  <ts-icon name="area-chart"></ts-icon>
  <ts-icon name="bar-chart"></ts-icon>
  <ts-icon name="pie-chart"></ts-icon>
  <ts-icon name="line-chart"></ts-icon>`,
    `<ts-icon name="camera-retro" size="lg"></ts-icon>
  <ts-icon name="camera-retro" size="2x"></ts-icon>
  <ts-icon name="camera-retro" size="3x"></ts-icon>
  <ts-icon name="camera-retro" size="4x"></ts-icon>
  <ts-icon name="camera-retro" size="5x"></ts-icon>`
  ]

}
