export default function Card(props) {
    return(
        <div style={{ border: '1px solid yellow',color: '#ffffff', textAlign: 'center' }}>
            {props.children}
        </div>
    );
}