import React from "react";


const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";

class Footer extends React.Component {
    constructor(props){
        super(props)

        this.handleChangeTheme = this.handleChangeTheme.bind(this)
    }

    handleChangeTheme(color) {
        if (color) {
            console.log('handleChangeTheme')
            this.props.changeColorTheme(color);
        }
    };

    UNSAFE_componentWillReceiveProps(nextprops){
        console.log('UNSAFE_componentWillReceiveProps: ' +JSON.stringify(nextprops))
        document
            .documentElement
            .style
            .setProperty("--main-color", nextprops.themeColor.color);
    }
    render() {
        return (
            <div className="footer">
                <div className="vertical-center">
                    <span>Choose Theme </span>
                    <button onClick={() => this.handleChangeTheme(RED)} className="dot red" />
                    <button onClick={() => this.handleChangeTheme(BLUE)} className="dot blue" />
                    <button onClick={() => this.handleChangeTheme(GRAY)} className="dot gray" />
                </div>
            </div>
        );
    }
};
export default Footer;