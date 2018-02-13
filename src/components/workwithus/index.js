import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-flexbox-grid';
import {getVacanciesItem} from '../../selectors/vacanciesSelectors';
import {loadVacanciesItem} from "../../action/workWithUsAction";
import AvailablePositions from '../availablepositions/index';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResumeForm from '../resumeform';

class WorkWithUs extends React.Component {
    componentDidMount() {
        this.props.loadVacanciesItem();

    }

    render() {
        const style = {
            padding: '10px',
            height: '100%',
            width: '100%'
        };
        return (
            <MuiThemeProvider>
               <Paper style={style} zDepth={1} className={'content'}>
                    <Row>
                        <Col xs={6}>
                            <div >
                                <h1>Work with us!</h1>
                                <h3>Available positions.</h3>
                                {this.props.vacancies.map((el) => (<div>
                                        <AvailablePositions name={el.name} responsibilities={el.responsibilities}
                                                            requirements={el.requirements}/>
                                    </div>)
                                )}

                            </div>
                        </Col>
                        <Col xs={6}>

                            <ResumeForm vacancies={this.props.vacancies}/>
                            {console.log(this.props.vacancies)}
                        </Col>
                    </Row>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({

    vacancies: getVacanciesItem(state),

});


export default connect(
    mapStateToProps,
    {
        loadVacanciesItem
    }
)(WorkWithUs);