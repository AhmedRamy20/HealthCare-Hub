// import { Component } from '@angular/core';
import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

// import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('salesChartCanvas') salesChartCanvas!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const ctx = this.salesChartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [
              1000, 1200, 1300, 1100, 1500, 1400, 1600, 1700, 1800, 2000, 1900,
              2100,
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
