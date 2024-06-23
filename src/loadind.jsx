
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading=()=>{

    return(<>
    
    <ul className="emailList">
              <li><Skeleton circle={true} height={40} width={40} />
                  <Skeleton count={1} width={500} height={13} />
                  <Skeleton count={1}  height={15} /> </li>

             <li>  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton count={1} width={500} height={15} />
                 <Skeleton count={1}  height={18} /> </li>

            <li>  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton count={1} width={500} height={15} />
                  <Skeleton count={1}  height={18} /> </li>

            <li>  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton count={1} width={500} height={15} />
                   <Skeleton count={1}  height={18} /> </li>

            <li>  <Skeleton circle={true} height={40} width={40} />
                   <Skeleton count={1} width={500} height={15} />
                   <Skeleton count={1}  height={18} /> </li>

            <li>  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton count={1} width={500} height={15} />
                  <Skeleton count={1}  height={18} /> </li>
 
         
        </ul>
    
    
    </>)
}
export default Loading;