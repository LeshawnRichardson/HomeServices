const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit">
                <h1>Edit Services</h1>
                <form action="/services" method='POST'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="price">Price: </label>
                    <input type="text" id="price" name="price"/>
                    <label htmlFor="workarea">Workarea:</label>
                    <uput type="checkbox" id="workarea" name="workarea"/>
                    <input type="submit" value="Create Service"/>
                </form>
            </DefaultLayout>
        )
    }
}