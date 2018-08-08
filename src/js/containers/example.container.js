import {connect} from 'react-redux';
import {ExampleComponent} from '../components/example.component.jsx';
import {ExampleService} from '../services/example.service';
import {exampleDataAvailable} from '../state/actions';

const mapStateToProps = (state) => {
    return {
        exampleMessage: state.exampleMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDataFetch: (evt) => {
            evt.preventDefault();
            ExampleService.getMessage()
                .then(() => dispatch(exampleDataAvailable(data)));
        }
    }
};

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);

export default ExampleContainer;
