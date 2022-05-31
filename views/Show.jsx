const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.service)
        const service = this.props.service
        return (
           <DefaultLayout title="Service Detail">
            <div>
                <p>{service.name}  ${service.price}
                    <img src={service.image} alt="" />
                </p>
                <p>
                    {
                    service.workarea
                    ?
                    "Interior"
                    :
                    "Exterior"
                    }
                </p>
                <button><a href={'/services'}>Back</a></button>
                <form action={`/services/${service._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/services/${service._id}/edit`}>{`Edit ${service.name}`}</a></button>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show