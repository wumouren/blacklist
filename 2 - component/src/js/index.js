import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        )
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('app')
)