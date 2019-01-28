import * as React from 'react';
import './contactFooter.css';


class ContactFooter extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    public render() {
        return (
            <div className="footer">
                <label>
                    Hello World!    
                </label>
            </div>
        );
    }
}

export default ContactFooter;
