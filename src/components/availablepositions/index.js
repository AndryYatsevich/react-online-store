import React from 'react';

class AvailablePositions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            style: {
                display: 'none'
            },

        }

    }
    showAnswer = () => {
        this.setState({
            visible: !this.state.visible,

        });
        console.log(this.state.visible);
        (this.state.visible) ? setTimeout( function () {
                this.setState({
                    style: {
                        display: 'none'
                    }
                })
            }.bind(this), 800)
            :   this.setState({
                style: {
                    display: 'block'
                }

            });
        console.log(this.state);
    };

    render() {
        const style = this.state.style;
        return (

            <div className={'vacancies'}>
                <div className={'vacancies-item'}>
                    <div className={'vacancies-name-wrap'}><div onClick={this.showAnswer} className={'vacancies-name'}>{this.props.name}</div></div>
                    <div style={style} className={(this.state.visible === false) ? 'vacancies-requirement vacancies-requirement-invisible ': 'vacancies-requirement vacancies-requirement-visible '}
                    >
                        <div>Responsibilities: {this.props.responsibilities.map((el) => {
                            return <ul>
                                <li>{el}</li>
                            </ul>
                        })}
                        </div>
                        <div>Requirements: {this.props.requirements.map((el) => {
                            return <ul>
                                <li>{el}</li>
                            </ul>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AvailablePositions;