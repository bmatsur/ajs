import PropTypes  from 'prop-types'
function List(props){

    const category = props.category;
    const itemList = props.items;
    


    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories); //numeric
    // fruits.sort((a,b) => b.calories - a.calories); //reverse numeric (descending)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
    //                                         {highCalFruits.name}: &nbsp;
    //                                         <b>{highCalFruits.calories}</b>
    //                                     </li>);


    //array of string into array of objects
    return (<>
                <h3 className='list-category'>{category}</h3>
                <ol className='list-items'>{listItems}</ol>
            </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number, 
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;