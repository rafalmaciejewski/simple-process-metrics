# simple-process-metrics

[![npm version](https://badge.fury.io/js/simple-process-metrics.svg)](https://badge.fury.io/js/simple-process-metrics)
[![Build Status](https://travis-ci.com/rafalmaciejewski/simple-process-metrics.svg?branch=master)](https://travis-ci.com/rafalmaciejewski/simple-process-metrics)
[![Dependencies](https://img.shields.io/david/rafalmaciejewski/simple-process-metrics.svg)](https://david-dm.org/rafalmaciejewski/simple-process-metrics)
[![Coverage Status](https://coveralls.io/repos/github/rafalmaciejewski/simple-process-metrics/badge.svg?branch=master)](https://coveralls.io/github/rafalmaciejewski/simple-process-metrics?branch=master)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

Simple library for Node.js process metrics with Promise-based interface.

---

## Installation

```shell
$ npm install --save simple-process-metrics
```


## Usage

```typescript
import { getMetrics } from 'simple-process-metrics';
...
const metrics = await getMetrics();
// or
getMetrics().then(metrics => ...);
```
