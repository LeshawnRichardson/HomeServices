const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructing
        const { services } = this.props
        return (
            <DefaultLayout title="Services">
                <div>
                    <nav>
                        < a class="link" href="/services/new">Create a New Service Request</a>
                    </nav>
                    <ul>
                        {
                            services.map(service => {
                                return (
                                    <li key={service._id}>
                                        <p><a href={`/services/${service._id}`}>{service.name}</a> ${service.price}</p>
                                        <p>{service.workarea ? 'Interior' : 'Exterior'}</p>
                                        <p><img src={service.image} alt="" /></p>
                                        <form action= {`/services/${service._id}?_method=DELETE`}method='POST'>
                                        <input type="submit" value="DELETE" />
                                        </form>

                                        
                                        <button><a href={`/services/${service._id}/edit`}>{`Edit ${service.name}`}</a></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index