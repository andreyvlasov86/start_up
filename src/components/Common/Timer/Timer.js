import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { accessToken } from '../../../service/apiOAuth';
import { formatTimeSec } from '../../../service/date';
import { refreshToken } from "../../../store/auth/actions";


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        this.timerID = setInterval(
              () => {
                  const token_obj = accessToken(this.props.data.token);
                  const { token } = token_obj;
                  const nowInSeconds = (new Date()).getTime() / 1000;
                  const expirationTimeInSeconds = token.expires_at.getTime() / 1000;
                  this.setState({
                      time: Date.now(),
                      token_time: (expirationTimeInSeconds - nowInSeconds).toFixed(),
                      token_exp: token_obj.expired()});
              },
              1000
            );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render() {
        const {token} = accessToken(this.props.data.token);
        return (
            <div className='row' style={{color: 'white', fontSize: '0.7em'}}>
                <div className='col-lg-4'>
                    <div>
                        local time:
                    </div>
                    <div>
                        {formatTimeSec(this.state.time)}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div>
                        token will be expired:
                    </div>
                    <div>
                        {formatTimeSec(token.expires_at)}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div>
                        time to expiration:
                    </div>
                    <div style={{color: 'red'}}>
                        {
                            this.state.token_exp
                            ? 'token expired'
                            : this.state.token_time
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        {data: state.auth }
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    refreshToken
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
