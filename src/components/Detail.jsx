import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail';
import { useState } from 'react';

function Detail() {
  const dispatch = useDispatch();

  const cnt = useSelector(state => state.detail.cnt);

  const [inputNum, setInputNum] = useState(0);

  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.value)) {
      setInputNum(parseInt(e.target.value));
    } else {
      console.error('숫자 아니다.');
    }
  }

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={convertAndSetNumber}/>
      <button type="button" onClick={() => {dispatch(changeCnt(inputNum))}}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;