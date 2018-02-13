import React from 'react';

class FaqQuestion extends React.Component {
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
            }.bind(this), 1000)
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

            <div className={'faq'}>
                <div className={'faq-item'}>
                    <div className={'faq-question-wrap'}><div onClick={this.showAnswer} className={'faq-question'}>{this.props.question}</div></div>
                    <div style={style} className={(this.state.visible === false) ? 'faq-answer faq-answer-invisible ': 'faq-answer faq-answer-visible '}
                             >{this.props.answer}
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqQuestion;