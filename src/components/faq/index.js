import React from 'react';
import {connect} from 'react-redux';
import {getQuestionItem} from '../../selectors/faqSelectors';
import {loadQuestionItem} from "../../action/faqAction";
import FaqQuestion from "../faqQuestion/index";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Faq extends React.Component {

    componentDidMount() {
        this.props.loadQuestionItem();
    }

    render() {
        const style = {
            padding: '10px',
            height: '100%'
        };
        return (
            <MuiThemeProvider>
                <Paper style={style} zDepth={1} className={'content'}>
                    <div>
                        <h1>F.A.Q.</h1>
                        <div>
                            {this.props.questionsItem.map((el) => (<div>
                                    <FaqQuestion question={el.question} answer={el.answer}/>
                                </div>)
                            )}
                        </div>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({

    questionsItem: getQuestionItem(state),

});


export default connect(
    mapStateToProps,
    {
        loadQuestionItem
    }
)(Faq);