import React from 'react';

export default class ColorSwitch extends React.Component {

    state = {
        switch: false,
        color: 'color-default.css'
    };

    handleColor = () => {
        this.setState({
            switch: !this.state.switch
        });
    }

    onColorSubmit = e => {
        e.preventDefault();

        this.props.onClick(this.state.color);
    }

    render() {
        return (
            <div 
                className={`ColorSwitcher ${this.state.switch ? 'ColorSwitcher--open' : ''}`}
            >
                <button 
                    className="ColorSwitcher__control"
                    onClick={this.handleColor}
                ></button>
                <form onSubmit={this.onColorSubmit} className="ColorSwitcher__switchs">
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Default" 
                        data-index="0" 
                        style={{backgroundColor: 'rgb(106, 17, 203)'}}
                        onClick={e => this.setState({ color: "color-default.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color One" 
                        data-index="1" 
                        style={{backgroundColor: 'rgb(230, 81, 0)'}}
                        onClick={e => this.setState({ color: "gradient-color-one.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Two" 
                        data-index="2" 
                        style={{backgroundColor: "rgb(75, 104, 218)"}}
                        onClick={e => this.setState({ color: "gradient-color-two.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Three" 
                        data-index="3" 
                        style={{backgroundColor: 'rgb(247, 95, 152)'}}
                        onClick={e => this.setState({ color: "gradient-color-three.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Four" 
                        data-index="4" 
                        style={{backgroundColor: 'rgb(129, 238, 142)'}}
                        onClick={e => this.setState({ color: "gradient-color-four.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Five" 
                        data-index="5" 
                        style={{backgroundColor: 'rgb(87, 61, 125)'}}
                        onClick={e => this.setState({ color: "gradient-color-five.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Six" 
                        data-index="6" 
                        style={{backgroundColor: 'rgb(243, 85, 105)'}}
                        onClick={e => this.setState({ color: "gradient-color-six.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Seven" 
                        data-index="7" 
                        style={{backgroundColor: 'rgb(55, 217, 125)'}}
                        onClick={e => this.setState({ color: "gradient-color-seven.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Eight" 
                        data-index="8" 
                        style={{backgroundColor: 'rgb(238, 9, 121)'}}
                        onClick={e => this.setState({ color: "gradient-color-eight.css" })}
                        ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Nine" 
                        data-index="9" 
                        style={{backgroundColor: 'rgb(173, 20, 87)'}}
                        onClick={e => this.setState({ color: "gradient-color-nine.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Ten" 
                        data-index="10" 
                        style={{backgroundColor: 'rgb(0, 150, 136)'}}
                        onClick={e => this.setState({ color: "gradient-color-ten.css" })}
                    ></button>
                    <button 
                        className="ColorSwitcher__switch" 
                        title="Switch to Gradient Color Eleven" 
                        data-index="11" 
                        style={{backgroundColor: 'rgb(22, 201, 246)'}}
                        onClick={e => this.setState({ color: "gradient-color-eleven.css" })}
                    ></button>
                </form>
            </div>
        )
    }
}
