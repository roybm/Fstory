import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NewsItemListing extends Component {
    render(){
        return (
            <div>
                <div><Link to={`/news/${this.props.id}`}><b>{this.props.title}</b></Link></div>
                <div>{this.props.teaser}</div>
            </div>
        )
    }
}

NewsItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
};

export default NewsItemListing