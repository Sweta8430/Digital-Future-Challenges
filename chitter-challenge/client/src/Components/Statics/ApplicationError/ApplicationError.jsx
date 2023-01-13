import errorMessages from './errorMessages';

const ApplicationError = ({ errorCode }) => {

    const errorMessage = errorMessages[errorCode] ?? `The application could not complete your request.`;

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">An error has occurred:</h1>
                <p className="lead">{errorMessage}</p>
            </div>
        </div>
    )
}

export default ApplicationError;