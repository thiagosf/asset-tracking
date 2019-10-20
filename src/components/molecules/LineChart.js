import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'react-apexcharts'
import { sort, number } from '../../utils'

const gridLineColor = '#484d60'
const tickColor = 'white'
const zeroLineColor = '#484d60'
const lineWidth = 2
const borderDash = [10]

class LineChart extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
    height: PropTypes.number
  };

  static defaultProps = {
    height: 150,
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false
        },
        animations: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '16px',
          colors: ['white']
        },
        formatter (val, opt) {
          return number.percentage(val)
        }
      },
      stroke: {
        curve: 'smooth',
        width: 5
      },
      title: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          left: 30,
          right: 30
        }
      },
      markers: {
        size: 7,
        strokeWidth: 0,
        colors: ['white'],
        hover: {
          size: 7
        }
      },
      tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
          fontSize: '14px'
        },
        marker: {
          show: false
        },
        x: {
          show: true
        },
        y: {
          formatter: () => null,
          title: {
            formatter: () => null
          }
        },
        z: {
          formatter: () => null
        },
        onDatasetHover: {
          highlightDataSeries: false,
        }
      },
      colors: ['#6AB8F1'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#755CB9'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1
        }
      }
    }
  };

  render() {
    const { data, options, height } = this.props
    const { values } = data
    const series = [{
      data: values
    }]
    const min = this._getMin(values)
    const max = this._getMax(values)
    const chartOptions = {
      ...options,
      height,
      xaxis: {
        type: 'category',
        labels: {
          show: false
          // ,
          // style: {
          //   colors: 'white',
          //   fontSize: '12px',
          // }
        },
        categories: data.labels,
        title: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        },
        title: {
          show: false
        },
        min,
        max
      },
    }
    return (
      <div className='chart chart--line'>
        <Chart
          options={chartOptions}
          series={series}
          type='line'
          height={height}
        />
      </div>
    );
  };

  _getMin = data => {
    const sorted = sort.sortNumbers([].concat(data), 'asc')
    return  sorted.shift()
  };

  _getMax = data => {
    const sorted = sort.sortNumbers([].concat(data), 'desc')
    return  sorted.shift()
  };
}

export default LineChart
