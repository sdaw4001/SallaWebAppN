import * as React from 'react';
import './landingpage.css';
import { animateScroll as scroll } from "react-scroll";
import ContactFooter from '../ContactFooter/ContactFooter';



class LandingPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            scrollPositionY: 0,
        };
    }

    public debounce = (func: () => void, wait: number) => {
        let timeout: any
        return (...args: any) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => func.apply(this, args), wait)
        }
    }

    public componentDidMount() {
        return window.addEventListener('scroll', this.debounce(this.handleScroll, 16))
    }

    public componentWillUnmount() {
        return window.removeEventListener('scroll', this.debounce(this.handleScroll, 16))
    }

    public handleScroll = () => {
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
    }

    public scrollToTop() {
        scroll.scrollToTop();
    }

    public scrollToBottom() {
        scroll.scrollToBottom();
    }

    public render() {
        const isScrolling = !!this.state.scrollPositionY;

        return (
            <div>

                <div className="haha">
                    <div className={(isScrolling) ? 'whole-bar-smaller' : 'whole-bar'}>
                        <div className="topbar-button-group">
                            <button className="topbar-button type1">Вина</button>
                            <button className="topbar-button type1">Резервации</button>
                            <button className="topbar-button type1">Галерия</button>
                            <button className="topbar-button type1">Постижения</button>
                        </div>
                    </div>
                    <a className={(isScrolling) ? '' : 'to-contacts-btn'} onClick={this.scrollToBottom}>Свържи се.</a>
                </div>
                <ContactFooter />
            </div>
        );
    }
}
export default LandingPage;
