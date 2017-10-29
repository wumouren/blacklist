import React from 'react';

export default class Footer extends React.Component {
    render() {
        let footer = ['2017','10','28'];
        
        return (
            
            <footer>
                <h1>这里是页脚</h1>
                <span>{footer}</span>
            </footer>
        )
    }
}