import CategoryItem from './category-item-component';

const Directory = ({categories}) =>{
    return (<div className="flex flex-wrap">
      {categories&&categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>)  
}

export default Directory;