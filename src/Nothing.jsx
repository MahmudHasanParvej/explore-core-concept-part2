/* eslint-disable react/prop-types */

export default function Nothing(props) {
    
    const { name, age } = props;
    return (
        <div>
            <h3>Nothing to say......{name}. are you really {age} years old?</h3>
        </div>
    )
}