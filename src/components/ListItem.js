const ListItem = (props) => {
    return (
        <li key={props.idx}>{props.item} <span class="close">×</span> </li>
    );
}

export default ListItem;