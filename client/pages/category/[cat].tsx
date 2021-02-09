import { useRouter } from 'next/dist/client/router';
import { AppState } from '../../store/init';
import { useSelector } from 'react-redux';
import MapComponent from '../../components/MapComponent/MapComponent';
import Neighborhood from '../../components/Neighborhood/Neighbourhood';



const Category = () => {
  const router = useRouter();
  const { cat } = router.query;
  const chosenParams  = useSelector ((store: AppState) => store.chosen.params)
  console.log(chosenParams)

  return (
    <div>
      <MapComponent />
      <h1>{ cat }</h1>
      <Neighborhood />
    </div>
  );
}

export default Category;