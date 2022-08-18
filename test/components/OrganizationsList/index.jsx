const OrganizationsList = ({organizations, onSelect}) => {
    return (
        <div>
            <ul>
                {organizations.map(({id, name, location, coordinates = {}}) => (
                    <li style={{
                        cursor: 'pointer',
                        listStyle: 'none'
                    }}
                        key={id}
                        onClick={() => onSelect(id)}
                    >
                        <strong>{name}</strong> {location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrganizationsList