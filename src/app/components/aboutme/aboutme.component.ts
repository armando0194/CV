import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  @Input() skills: Skill[];

  private skillNames: string[];
  public chartData;
  public radarChartType = 'radar';

  private chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scale: {
      gridLines: { color: 'rgba(146, 145, 145, 1)' },
      ticks: {
        min: 0,
        max: 100
      },
      pointLabels: {
        // callback: function(value, index, values) {
        //     return '$' + value;
        // }
        fontColor: 'rgba(146, 145, 145, 1)',
        fontSize: '12'
      }
    }
  };

  constructor() {}

  ngOnInit() {
    this.setupChart();
  }

  setupChart() {
    // get the levels of the skills
    const skillLevels: number[] = this.skills.map(val => {
      return val.level;
    });

    // get skill names
    this.skillNames = this.skills.map(val => {
      return val.name;
    });

    // add skill levels to the chart
    this.chartData = [
      {
        data: skillLevels,
        label: '',
        backgroundColor: 'rgba(243, 202, 47, .6)',
        borderColor: 'rgba(243, 202, 47, 1)'
      }
    ];
  }
}
