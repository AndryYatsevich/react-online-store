import React from 'react';
import CatalogItem from '../catalogitem';
import {connect} from 'react-redux';
import {getCatalogItem} from '../../selectors/catalogItemSelector';
import {loadCatalog} from "../../action/catalogItemAction";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Catalog extends React.Component {
    componentDidMount() {
        this.props.loadCatalog();
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
                    <div>
                        <h1>Каталог товаров</h1>
                        <div>
                            <CatalogItem product={this.props.catalogItem}/>
                        </div>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({

    catalogItem: getCatalogItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadCatalog
    }
)(Catalog);