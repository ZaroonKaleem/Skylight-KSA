import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

type Year = 2023 | 2024 | 2025;

interface PerformanceCategory {
  target: number;
  achieved: number;
}

interface YearlyPerformance {
  glass: PerformanceCategory;
  aluminum: PerformanceCategory;
  civil: PerformanceCategory;
}


@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent implements OnInit {
  selectedYear: Year = 2023;

  performanceData: Record<Year, YearlyPerformance> = {
    2023: {
      glass: { target: 80, achieved: 91 },
      aluminum: { target: 80, achieved: 62 },
      civil: { target: 75, achieved: 70 }
    },
    2024: {
      glass: { target: 80, achieved: 92 },
      aluminum: { target: 80, achieved: 64 },
      civil: { target: 75, achieved: 58 }
    },
    2025: {
      glass: { target: 80, achieved: 98 },
      aluminum: { target: 80, achieved: 64 },
      civil: { target: 75, achieved: 58 }
    }
  };

  ngOnInit(): void {}

  changeYear(year: number): void {
    if (year === 2023 || year === 2024 || year === 2025) {
      this.selectedYear = year;
    }
  }

  getCompletionPercentage(category: keyof YearlyPerformance): number {
    const yearData = this.performanceData[this.selectedYear];
    return Math.round((yearData[category].achieved / yearData[category].target) * 80);
  }
}     