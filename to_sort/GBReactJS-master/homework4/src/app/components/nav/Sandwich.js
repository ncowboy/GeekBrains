import React from 'react';

export default class Sandwich extends React.Component {
    render() {
        return <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#menu">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
    }
}
