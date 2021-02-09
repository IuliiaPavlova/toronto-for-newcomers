import Banner from '../components/Banner/Banner';
import ParamQuestions from '../components/ParamQuestions/ParamQuestions';

const Categories = () => {
  return (
    <div>
      <Banner />
      <h3 className="categoriesHeadline">Choose at least 3 options that are most important to you</h3>
      <ParamQuestions />
    </div>
  );
}

export default Categories;