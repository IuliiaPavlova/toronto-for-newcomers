import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addParam, removeParam } from '../../store/actions';
import { AppState } from '../../store/init';





const ParamQuestions = () => {
  const params = useSelector((store: AppState) => store.params);
  const dispatch = useDispatch();
  const router = useRouter();
  const { cat } = router.query;
  const chosenParams = useSelector((store: AppState) => store.chosen.params);
  
  console.log(cat)

  const handleClick = (event: any) => {
    // console.log(event.target.checked)
    !event.target.checked
      ? dispatch(removeParam(event.target.value))
      : dispatch(addParam(event.target.value))
  }

  return (
    <div className='categories'>
      {
        params.map((param) => (
          <div className='categoryWrapper'>
            <input type='checkbox' className='categoryCheckbox' onChange={handleClick} value={param.type} />
            <label className='categoryLabel'>
              {param.type}
            </label>
          </div>
        ))
      }
      <div className='btnWrapper'>
        {
          chosenParams.length > 2 && (
            <Link href={`/category/${cat}`}>
              <button className='btn'>Continue</button>
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default ParamQuestions;