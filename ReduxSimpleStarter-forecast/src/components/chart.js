import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default props => {
  return (
    <div>
      <Sparklines
        data={props.data}
        limit={10}
        width={180}
        height={120}
        margin={5}
      >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};