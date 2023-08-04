import TreeDetail from '../../component/treeDetail/TreeDetail'
import { useParams } from 'react-router-dom';
import BestsellingTrees from '../../component/bestSellingTrees/Bestsellingtrees'

const Singleproductpage = () => {
    const { tree_id } = useParams(); 
    console.log('ID from URL parameters:', tree_id);
    return ( 
        <div>
            <TreeDetail tree_id={tree_id}/>
            <BestsellingTrees/>
        </div>
     );
}
 
export default Singleproductpage;