const React = require('react')

class DefaultLayout extends React.Component {
    render() {

        return (
            <html lang="en">
                <head>

                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="styles.css" />
                </head>
                <body>
                    <div class="logo">
                        <img src="https://i.imgur.com/xCoHSiS.jpg" />
                    </div>

                    <div class="service">
                        <img src="https://i.imgur.com/r3Um7VH.jpg" />
                        <img src="https://i.imgur.com/YcwJBnB.jpg" />
                        <img src="https://i.imgur.com/ie5E2Un.jpg" />
                    </div>
                    <h1>{this.props.title}</h1>
                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout