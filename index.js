const unit = ['', 'K', 'M', 'G', 'T', 'P'];

function bytesToSize(input, precision = 3) {
  const index = Math.floor(Math.log(input) / Math.log(1024));

  if (unit >= unit.length) {
    return input + ' B';
  }

  return (input / Math.pow(1024, index)).toFixed(precision) + ' ' + unit[index] + 'B';
}

function mem() {
  return bytesToSize(process.memoryUsage().rss);
}

module.exports = mem;
