/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { DonutChartLegendRow } from './donut_chart_legend_row';
import { shallowWithIntl } from '@kbn/test/jest';
import React from 'react';

describe('DonutChartLegendRow', () => {
  it('passes appropriate props', () => {
    const wrapper = shallowWithIntl(
      <DonutChartLegendRow color="green" message="Foo" content={23} data-test-subj="foo" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
