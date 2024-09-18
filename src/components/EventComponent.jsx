export default function EventComponent({ info, details }) {

    return (
        <>
            <h1>asdfasdf</h1>
            <h2>{info.name}</h2>
            <h2>{info.department.name}</h2>

            <h2>asdfasdf</h2>
            <h3>{details.join(' + ')}</h3>
        </>
    );
}