/**
 * Created by shooterbret on 2/28/2017.
 */
import { Component, PropTypes, Children } from 'react';

 class WithStylesContext extends Component {
     componentWillUnmount() {
         this.removeCss();
     }
     getChildContext() {
         return { insertCss: this.props.onInsertCss };

     }
    render() {
        return Children.only(this.props.children);
    }
}
WithStylesContext.propTypes = {
    children: PropTypes.element.isRequired,
    onInsertCss: PropTypes.func.isRequired
};
WithStylesContext.childContextTypes = {
    insertCss: PropTypes.func.isRequired
};

export default WithStylesContext;