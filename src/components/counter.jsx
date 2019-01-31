import React from 'react';
import { connect } from 'react-redux';
import {increementCounter , deleteCounter} from '../actions/index';
import {
    Button,
    Badge
} from 'reactstrap';

const Counter = ({dispatch, counter}) => {
        return(
            <div>
                <Badge color={counter.value === 0 ? 'warning' : 'info'} className="m-2">
                    {counter.value}
                </Badge>
                <Button color="danger" className="btn-sm m-2"
                onClick={() => dispatch(deleteCounter(counter))}>
                    حذف
                </Button>
                <Button color="primary" className="btn-sm m-2"
                onClick={() => this.props.onDecreement(this.props.counter)}
                >
                    کاستن
                </Button>
                <Button color="primary" className="btn-sm"
                onClick={() => dispatch(increementCounter(counter))}
                >
                    افزودن
                </Button>
            </div>
        );

}

export default connect (state => {
    return{
      state
    }
  }) (Counter);