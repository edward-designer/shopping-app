import CategoryItem from './category-item-component';

const Directory = ({categories}) =>{ // must destruct the props object
    return (<div className="flex flex-wrap">
      {categories&&categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>)  
}

export default Directory;